import { Next } from 'koa';

import { createLogger } from 'src/util/logger';
import CustomError, { getErrorResponse } from 'src/util/CustomError';
import { KoaAppContext, ResCode } from 'src/type';

const logger = createLogger(__filename);

export default async function errorMiddleware(ctx: KoaAppContext, next: Next) {
  try {
    await next();
  } catch (error) {
    const { status, code, data } = getErrorResponse(error);
    ctx.status = status;
    ctx.body = { code, message: ResCode[code], data };

    if (error instanceof CustomError && error.logging) {
      logger.error(error);
    } else if (ctx.body.code === ResCode.UNKNOWN_ERROR) {
      logger.error(error);
    }
  }
}
