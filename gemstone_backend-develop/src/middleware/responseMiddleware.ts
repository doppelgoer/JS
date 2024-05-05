import { Next } from 'koa';
import CustomError from 'src/util/CustomError';
import { KoaAppContext, ResCode } from 'src/type';

export default async function responseMiddleware(ctx: KoaAppContext, next: Next) {
  const result = await next();

  if (result instanceof CustomError) {
    ctx.status = result.status || 400;
    ctx.body = {
      code: result.code,
      message: ResCode[result.code] ?? 'UNKNOWN_ERROR',
      data: result.data,
    };
  } else {
    ctx.status = 200;
    ctx.body = {
      code: ResCode.OK,
      message: 'OK',
      data: result,
    };
  }
}
