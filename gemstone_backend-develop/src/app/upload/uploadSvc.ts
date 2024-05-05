import path from 'path';
import { File } from 'formidable';
import { Transaction } from 'sequelize';

import config from 'src/config';
import CustomError from 'src/util/CustomError';
import { checkUploadFile, getDataRelativePath, getFullPath, parseUploadedFilename } from 'src/app/upload/uploadUtil';
import { ResCode } from 'src/type';
import { FileStatus, FileType, UploadModel } from 'src/schema/sequelize/UploadModel';
import { createThumbnailCover, moveImageAndThumbnail, removeImageAndThumbnail } from 'src/util/imageUtil';

export async function uploadTempFile(fileList: File[], type: FileType, transaction: Transaction) {
  if (!fileList.length) throw new CustomError(ResCode.REQUEST_INVALID_PARAM);

  const uploadedIdList: string[] = [];
  for (const file of fileList) {
    const parseInfo = parseUploadedFilename(file);
    const uploadId = parseInfo.uploaded.name;

    await UploadModel.create(
      {
        id: uploadId,
        path: getDataRelativePath(file.path),
        originalName: parseInfo.original.base,
        mimeType: file.type || 'application/octet-stream',
        size: file.size,
        status: FileStatus.TEMP,
        type,
      },
      { transaction }
    );
    uploadedIdList.push(uploadId);
  }

  return uploadedIdList;
}

export async function uploadTempFileForProfileImage(fileList: File[], transaction: Transaction) {
  if (!fileList.length) throw new CustomError(ResCode.REQUEST_INVALID_PARAM);
  const { maxSize, allowedMimeTypeList } = config.data.profile;
  for (const file of fileList) {
    checkUploadFile({ file, maxSize, allowedMimeTypeList });
    await createThumbnailCover(file.path, 480, 480);
  }

  return uploadTempFile(fileList, FileType.PROFILE_IMAGE, transaction);
}

export async function saveTempFile(id: string, targetDir: string, transaction: Transaction) {
  const row = await UploadModel.findOne({ where: { id }, transaction });
  if (!row) throw new CustomError(ResCode.UPLOAD_NOT_EXISTS);

  const { status } = row;
  if (status !== FileStatus.TEMP) return;

  const oldFullPath = getFullPath(row.path);
  const oldFullPathInfo = path.parse(oldFullPath);
  const newFullPath = path.resolve(targetDir, oldFullPathInfo.base);

  await UploadModel.update(
    {
      path: getDataRelativePath(newFullPath),
      status: FileStatus.SAVED,
    },
    { where: { id }, transaction }
  );

  await moveImageAndThumbnail(oldFullPath, targetDir);
}

export async function removeUploadFile(id: string) {
  const row = await UploadModel.findOne({ where: { id } });
  if (!row) return;

  const promiseList: Promise<unknown>[] = [];
  promiseList.push(removeImageAndThumbnail(getFullPath(row.path)));
  promiseList.push(UploadModel.destroy({ where: { id } }));
  await Promise.allSettled(promiseList);
}
