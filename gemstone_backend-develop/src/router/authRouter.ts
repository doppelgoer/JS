import Router from '@koa/router';
import { getCommonMiddlewareList } from 'src/middleware';
import createValidateMiddleware from 'src/middleware/createValidateMiddleware';
import { getLoginInfo, login, logout, renewToken } from 'src/app/auth/authCtrl';
import { validateLoginBody, validateRenewTokenBody } from 'src/app/auth/authValidator';

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Auth API
 */
const authRouter = new Router();

/**
 * @swagger
 * /api/login:
 *   get:
 *     tags: [Auth]
 *     summary: 로그인 정보 조회
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SanitizedMember'
 */
authRouter.get('/api/login', ...getCommonMiddlewareList(), getLoginInfo);

/**
 * @swagger
 * /api/login:
 *   post:
 *     tags: [Auth]
 *     summary: 로그인
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 example: ID
 *                 required: true
 *               password:
 *                 type: string
 *                 example: PW
 *                 required: true
 *               keepLogin:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 refreshToken:
 *                   type: string
 *                   example: 'newRefreshToken'
 */
authRouter.post(
  '/api/login',
  ...getCommonMiddlewareList({ useSession: false }),
  createValidateMiddleware(validateLoginBody),
  login
);

/**
 * @swagger
 * /api/login/renew:
 *   post:
 *     tags: [Auth]
 *     summary: accessToken, refreshToken 재발급
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *                 example: oldRefreshToken
 *                 required: true
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 refreshToken:
 *                   type: string
 *                   example: 'newRefreshToken(if needed)'
 */
authRouter.post(
  '/api/login/renew',
  ...getCommonMiddlewareList({ useSession: false }),
  createValidateMiddleware(validateRenewTokenBody),
  renewToken
);

/**
 * @swagger
 * /api/logout:
 *   post:
 *     tags: [Auth]
 *     summary: 로그아웃
 *     responses:
 *       200:
 *         description: OK
 */
authRouter.post('/api/logout', ...getCommonMiddlewareList({ useSession: false }), logout);

export default authRouter;
