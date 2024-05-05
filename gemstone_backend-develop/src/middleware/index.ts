import Koa, { Next } from 'koa';
import koaBody from 'koa-body';

import authMiddleware from 'src/middleware/authMiddleware';
import createAccessMiddleware from 'src/middleware/createAccessMiddleware';
import createCheckPermissionMiddleware from 'src/middleware/createCheckPermissionMiddleware';
import errorMiddleware from 'src/middleware/errorMiddleware';
import responseMiddleware from 'src/middleware/responseMiddleware';
import transactionMiddleware from 'src/middleware/transactionMiddleware';

import { KoaAppContext, KoaAppMiddlewareOption, ResCode } from 'src/type';

export function getCommonMiddlewareList(param: KoaAppMiddlewareOption = {}) {
  const defaultOption = { useSession: true };
  const option: KoaAppMiddlewareOption = { ...defaultOption, ...param };

  const middlewareList = [];
  middlewareList.push(errorMiddleware);
  middlewareList.push(createAccessMiddleware(option));
  middlewareList.push(koaBody(option.bodyOption));

  if (option.useSession) {
    middlewareList.push(authMiddleware);
    if (option.requireAdmin || option.requireLogin) middlewareList.push(createCheckPermissionMiddleware(option));
  }

  if (option.useTransaction) middlewareList.push(transactionMiddleware);
  middlewareList.push(responseMiddleware);

  return middlewareList;
}

// import later because of circular reference issue
import router from 'src/router';
export function applyRoute(app: Koa) {
  app.use(async (ctx: KoaAppContext, next: Next) => {
    await next();
    if (ctx.status === 404 || ctx.status === 405) {
      ctx.body = { code: ResCode.REQUEST_NOT_FOUND, message: 'REQUEST_NOT_FOUND' };
    }
  });
  app.use(router.routes());
  app.use(router.allowedMethods());
}
