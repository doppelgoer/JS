import Router from '@koa/router';

import { getCommonMiddlewareList } from 'src/middleware';
import { samplePing } from 'src/app/sample/sampleCtrl';

/**
 * @swagger
 * tags:
 *   name: Sample
 *   description: Sample API
 */
const sampleRouter = new Router();

/**
 * @swagger
 * /api/sample/ping:
 *   get:
 *     tags: [Sample]
 *     summary: 단순 서버 응답
 */
sampleRouter.get('/api/sample/ping', ...getCommonMiddlewareList(), samplePing);

export default sampleRouter;
