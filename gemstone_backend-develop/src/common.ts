import path from 'path';
import { register } from 'tsconfig-paths';

export const ROOT_PATH = path.resolve(__dirname, '../');

register({
  baseUrl: ROOT_PATH,
  paths: { '*': ['*'] },
});
