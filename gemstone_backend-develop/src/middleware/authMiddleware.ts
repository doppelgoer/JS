import { Next } from 'koa';

import { createLogger } from 'src/util/logger';
import CustomError from 'src/util/CustomError';
import { verifyAccessToken } from 'src/app/auth/authUtil';

import { KoaAppContext, ResCode } from 'src/type';
import { MemberType } from 'src/schema/sequelize/MemberModel';

const logger = createLogger(__filename);

export default async function authMiddleware(ctx: KoaAppContext, next: Next) {
  const accessToken = ctx.cookies.get('acc');

  if (accessToken) {
    try {
      const loginInfo = await verifyAccessToken(accessToken);
      ctx.state.loginInfo = loginInfo;
      ctx.state.isLoggedIn = true;
      ctx.state.isAdmin = loginInfo.type === MemberType.ADMIN;
    } catch (error) {
      if (error.message === 'jwt expired') {
        throw new CustomError(ResCode.AUTH_TOKEN_EXPIRED);
      } else {
        logger.error(`verifyAccessToken() failed: ${accessToken}`, error);
        throw new CustomError(ResCode.AUTH_TOKEN_INVALID);
      }
    }
  } else {
    ctx.state.isLoggedIn = false;
    ctx.state.isAdmin = false;
  }
  await next();
}
