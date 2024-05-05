import '../common';
import path from 'path';
import fs from 'fs-extra';
import { Op } from 'sequelize';

import config from 'src/config';
import { getFullPath } from 'src/app/upload/uploadUtil';
import { FileStatus, UploadModel } from 'src/schema/sequelize/UploadModel';

async function removeOldTempUpload(targetTime: number) {
  console.log(`removeOldTempUpload(${targetTime})`);

  const uploadList = await UploadModel.findAll({
    where: {
      status: FileStatus.TEMP,
      createdAt: { [Op.lt]: targetTime },
    },
  });

  for (const row of uploadList) {
    try {
      await UploadModel.destroy({ where: { id: row.id } });
      await fs.remove(getFullPath(row.path));
    } catch (error) {
      console.error(error);
    }
  }
}

async function removeOldFile(dirPath: string, targetTime: number) {
  console.log(`removeOldFile(${dirPath}, ${targetTime})`);

  const existFlag = await fs.pathExists(dirPath);
  if (!existFlag) return;

  const fileList = await fs.readdir(dirPath);
  for (const item of fileList) {
    const filePath = path.resolve(dirPath, item);
    const fileStat = await fs.stat(filePath);

    if (fileStat.isDirectory()) continue;

    const fileTime = fileStat.mtime.getTime();
    if (fileTime < targetTime) {
      await fs.remove(filePath).catch(console.error);
    }
  }
}

(async () => {
  const nowTime = Date.now();
  const targetTime = nowTime - config.data.temp.keepDay * 86400 * 1000;

  await removeOldTempUpload(targetTime);
  await removeOldFile(config.data.temp.path, targetTime);

  console.log('Done');
  process.exit();
})();
