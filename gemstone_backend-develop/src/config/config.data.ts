import { ROOT_PATH } from 'src/common';
import path from 'path';

const DATA_DIR = path.resolve(ROOT_PATH, './data');

const dataConfig = {
  path: DATA_DIR,
  profile: {
    path: path.resolve(DATA_DIR, './profile'),
    allowedMimeTypeList: ['image/jpeg', 'image/png', 'image/gif'],
    maxSize: 10 * 1024 * 1024,
  },
  temp: {
    path: path.resolve(DATA_DIR, './tmp'),
    keepDay: 7,
  },
};

export default dataConfig;
