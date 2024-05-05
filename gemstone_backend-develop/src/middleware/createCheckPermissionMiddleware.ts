import { Next } from 'koa';
import { createLogger } from 'src/util/logger';
import CustomError from 'src/util/CustomError';

import { CheckPermissionMiddlewareOption, KoaAppContext, ResCode } from 'src/type';

const logger = createLogger(__filename);

export default function createCheckPermissionMiddleware({
  requireLogin,
  requireAdmin,
}: CheckPermissionMiddlewareOption) {
  return async (ctx: KoaAppContext, next: Next): Promise<void> => {
    logger.info(`Permission check (requireLogin: ${requireLogin ?? false}, requireAdmin: ${requireAdmin ?? false})`);
    const { isLoggedIn, isAdmin } = ctx.state;
    if (requireLogin && !isLoggedIn) throw new CustomError(ResCode.AUTH_NEED_LOGIN);
    if (requireAdmin && !isAdmin) throw new CustomError(ResCode.AUTH_NEED_ADMIN);

    await next();
  };
}
