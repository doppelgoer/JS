import path from 'path';
import fs from 'fs-extra';
import sharp from 'sharp';
import glob from 'glob';

export async function createThumbnailCover(srcPath: string, width: number, height: number) {
  const { dir, name } = path.parse(srcPath);
  const targetPath = path.resolve(dir, `${name}_c${width}x${height}.jpg`);

  const srcBuffer = await fs.readFile(srcPath);
  return sharp(srcBuffer).resize({ width, height }).toFormat('jpeg').toFile(targetPath);
}

export async function createThumbnailFitWidth(srcPath: string, width: number) {
  const { dir, name } = path.parse(srcPath);
  const targetPath = path.resolve(dir, `${name}_w${width}.jpg`);

  const srcBuffer = await fs.readFile(srcPath);
  return sharp(srcBuffer).resize({ width }).toFormat('jpeg').toFile(targetPath);
}

export async function getThumbnailList(srcPath: string) {
  return new Promise<string[]>((resolve, reject) => {
    const { dir, name } = path.parse(srcPath);
    const thumbnailPattern = `${dir}/${name}_*`.replace(/\\/g, '/');

    glob(thumbnailPattern, (error, matches) => {
      if (error) reject(error);
      else resolve(matches);
    });
  });
}

export async function moveImageAndThumbnail(srcPath: string, targetDir: string) {
  const thumbnailPathList = await getThumbnailList(srcPath);
  await fs.ensureDir(targetDir);

  await fs.move(srcPath, path.resolve(targetDir, path.basename(srcPath)));
  for (const thumbnailPath of thumbnailPathList) {
    await fs.move(thumbnailPath, path.resolve(targetDir, path.basename(thumbnailPath)));
  }
}

export async function removeImageAndThumbnail(srcPath: string) {
  const thumbnailPathList = await getThumbnailList(srcPath);

  await fs.remove(srcPath);
  for (const thumbnailPath of thumbnailPathList) await fs.remove(thumbnailPath);
}
