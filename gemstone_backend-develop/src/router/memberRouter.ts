import Router from '@koa/router';
import { getCommonMiddlewareList } from 'src/middleware';
import { getMember, getMemberList, addMember, updateMember } from 'src/app/member/memberCtrl';
import createValidateMiddleware from 'src/middleware/createValidateMiddleware';
import {
  validateAddMemberBody,
  validateGetMemberListQuery,
  validateGetMemberParam,
  validateUpdateMemberBody,
} from 'src/app/member/memberValidator';

/**
 * @swagger
 * tags:
 *   name: Member
 *   description: Member API
 *
 * components:
 *   schemas:
 *     SanitizedMember:
 *       type: object
 *       properties:
 *         no:
 *           type: string
 *           example: '1'
 *         id:
 *           type: string
 *           example: 'admin'
 *         nickname:
 *           type: string
 *           example: '관리자'
 *         name:
 *           type: string
 *           example: '관리자'
 *         address:
 *           type: string
 *           example: '서울시 강남구'
 *         phone:
 *           type: string
 *           example: '010-0000-0000'
 *         email:
 *           type: string
 *           example: 'admin@gemstone'
 *         profileImage:
 *           type: string
 *           example: '/data/member/1234'
 *         status:
 *           type: string
 *           example: 'NORMAL'
 *         type:
 *           type: string
 *           example: 'ADMIN'
 *         data:
 *           type: object
 *         lastLoginAt:
 *           type: string
 *           example: '2021-01-01T00:00:00.000Z'
 *         createdAt:
 *           type: string
 *           example: '2021-01-01T00:00:00.000Z'
 *         updatedAt:
 *           type: string
 *           example: '2021-01-01T00:00:00.000Z'
 */
const memberRouter = new Router();

/**
 * @swagger
 * /api/member/list:
 *   get:
 *     tags: [Member]
 *     summary: Member 목록 조회
 *     parameters:
 *       - name: offset
 *         in: query
 *         description: Paging offset
 *         schema:
 *           type: integer
 *       - name: limit
 *         in: query
 *         description: Paging limit
 *         schema:
 *           type: integer
 *       - name: sortBy
 *         in: query
 *         description: 정렬 기준
 *         schema:
 *           type: string
 *       - name: sortOrder
 *         in: query
 *         description: 정렬 순서
 *         schema:
 *           type: string
 */
memberRouter.get(
  '/api/member/list',
  ...getCommonMiddlewareList({ requireAdmin: true }),
  createValidateMiddleware(validateGetMemberListQuery, (ctx) => ctx.query),
  getMemberList
);

/**
 * @swagger
 * /api/member/{id}:
 *   get:
 *     tags: [Member]
 *     summary: Member 조회
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SanitizedMember'
 */
memberRouter.get(
  '/api/member/:id',
  ...getCommonMiddlewareList({ requireAdmin: true }),
  createValidateMiddleware(validateGetMemberParam, (ctx) => ctx.params),
  getMember
);

/**
 * @swagger
 * /api/member:
 *   post:
 *     tags: [Member]
 *     summary: Member 추가
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
 *               nickname:
 *                 type: string
 *                 example: Nickname
 *                 required: true
 *               name:
 *                 type: string
 *                 example: Name
 *                 required: true
 *               address:
 *                 type: string
 *                 example: 주소
 *               phone:
 *                 type: string
 *                 example: 전화번호
 *               email:
 *                 type: string
 *                 example: Email
 *                 required: true
 *               status:
 *                 type: string
 *                 example: NORMAL
 *               type:
 *                 type: string
 *                 example: NORMAL
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SanitizedMember'
 */
memberRouter.post(
  '/api/member',
  ...getCommonMiddlewareList({ requireAdmin: true, useTransaction: true }),
  createValidateMiddleware(validateAddMemberBody),
  addMember
);

/**
 * @swagger
 * /api/member/{id}:
 *   patch:
 *     tags: [Member]
 *     summary: Member 수정
 *     parameters:
 *       - name: id
 *         type: string
 *         in: path
 *         description: ID
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: PW
 *               nickname:
 *                 type: string
 *                 example: Nickname
 *               name:
 *                 type: string
 *                 example: Name
 *               address:
 *                 type: string
 *                 example: 주소
 *               phone:
 *                 type: string
 *                 example: 전화번호
 *               email:
 *                 type: string
 *                 example: Email
 *               status:
 *                 type: string
 *                 example: NORMAL
 *               type:
 *                 type: string
 *                 example: NORMAL
 */
memberRouter.patch(
  '/api/member/:id',
  ...getCommonMiddlewareList({ requireAdmin: true, useTransaction: true }),
  createValidateMiddleware(validateUpdateMemberBody),
  createValidateMiddleware(validateGetMemberParam, (ctx) => ctx.params),
  updateMember
);

export default memberRouter;
