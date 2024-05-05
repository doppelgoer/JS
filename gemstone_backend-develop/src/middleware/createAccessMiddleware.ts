import { Next } from 'koa';
import { createLogger } from 'src/util/logger';
import { createRandomHash } from 'src/util/cryptoUtil';
import asyncLocalStorage from 'src/util/asyncLocalStorage';

import { AccessMiddlewareOption, KoaAppContext, ResCode } from 'src/type';
import { getErrorResponse } from 'src/util/CustomError';

const logger = createLogger(__filename);

export default function createAccessMiddleware({ loggingParameters }: AccessMiddlewareOption) {
  return async (ctx: KoaAppContext, next: Next): Promise<void> => {
    ctx.state.reqId = createRandomHash(8);
    ctx.state.reqTime = Date.now();

    await asyncLocalStorage.run({ ctx }, async () => {
      const { method, path, state } = ctx;

      logger.info(`${method} ${path}`);

      try {
        await next();

        if (loggingParameters) {
          Object.keys(ctx.query).length && logger.info(`query: ${JSON.stringify(ctx.query)}`);
          Object.keys(ctx.request.body).length && logger.info(`body: ${JSON.stringify(ctx.request.body)}`);
        }

        const elapsedTime = Date.now() - state.reqTime;
        logger.info(`${method} ${path} finished in ${elapsedTime}ms (${ctx.body.code} ${ctx.body.message})`);
      } catch (error) {
        const { code } = getErrorResponse(error);
        const elapsedTime = Date.now() - state.reqTime;
        logger.info(`${method} ${path} finished in ${elapsedTime}ms (${code} ${ResCode[code]})`);
        throw error;
      }
    });
  };
}
