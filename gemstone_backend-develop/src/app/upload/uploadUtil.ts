import path from 'path';
import { File } from 'formidable';
import { IKoaBodyOptions } from 'koa-body';

import config from 'src/config';
import CustomError from 'src/util/CustomError';
import { ResCode } from 'src/type';

export function getBodyOptionForUpload(formidableOption?: IKoaBodyOptions['formidable']): IKoaBodyOptions {
  return {
    multipart: true,
    formidable: {
      keepExtensions: true,
      uploadDir: config.data.temp.path,
      onFileBegin: (name, file) => {
        file.path = path.resolve(config.data.temp.path, path.basename(file.path).replace(/^upload_/, ''));
      },
      ...formidableOption,
    },
  };
}

export function parseUploadedFilename(file: File) {
  return {
    original: path.parse(file.name ?? ''),
    uploaded: path.parse(file.path),
  };
}

export function getFullPath(dataRelativePath: string) {
  return path.resolve(config.data.path, dataRelativePath);
}

export function getDataRelativePath(fullPath: string) {
  return path.relative(config.data.path, fullPath).replace(/\\/g, '/');
}

export function checkUploadFile({ file, maxSize, allowedMimeTypeList }: CheckUploadFileParam) {
  if (!file.type) throw new CustomError(ResCode.UPLOAD_INVALID_FILE);
  if (maxSize && file.size > maxSize) throw new CustomError(ResCode.UPLOAD_TOO_LARGE);
  if (allowedMimeTypeList && allowedMimeTypeList.indexOf(file.type) === -1) {
    throw new CustomError(ResCode.UPLOAD_MIME_TYPE_NOT_ALLOWED);
  }
}

interface CheckUploadFileParam {
  file: File;
  maxSize?: number;
  allowedMimeTypeList?: string[];
}
