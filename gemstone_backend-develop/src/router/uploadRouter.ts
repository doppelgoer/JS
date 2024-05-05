import Router from '@koa/router';

import config from 'src/config';
import { getCommonMiddlewareList } from 'src/middleware';
import { uploadProfileImage } from 'src/app/upload/uploadCtrl';
import { getBodyOptionForUpload } from 'src/app/upload/uploadUtil';

/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: Upload API
 */
const uploadRouter = new Router();

/**
 * @swagger
 * /api/upload/profileImage:
 *   post:
 *     tags: [Upload]
 *     summary: Upload Profile Image API
 */
uploadRouter.post(
  '/api/upload/profileImage',
  ...getCommonMiddlewareList({
    bodyOption: getBodyOptionForUpload({ maxFileSize: config.data.profile.maxSize }),
    useTransaction: true,
  }),
  uploadProfileImage
);

export default uploadRouter;
