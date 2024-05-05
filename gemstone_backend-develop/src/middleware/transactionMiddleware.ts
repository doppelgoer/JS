import { Next } from 'koa';
import { createLogger } from 'src/util/logger';
import sequelize, { rollbackTransaction } from 'src/util/sequelize';

import { KoaAppContext, ResCode } from 'src/type';

const logger = createLogger(__filename);

export default async function transactionMiddleware(ctx: KoaAppContext, next: Next) {
  const transaction = await sequelize.transaction();
  ctx.state.transaction = transaction;

  try {
    await next();
  } catch (error) {
    rollbackTransaction(transaction);
    throw error;
  }

  if (ctx.body.code === ResCode.OK) {
    try {
      await transaction.commit();
    } catch (error) {
      logger.error('transaction.commit() failed', error);
      rollbackTransaction(transaction);

      ctx.body = {
        code: ResCode.UNKNOWN_ERROR,
        message: 'UNKNOWN_ERROR',
      };
    }
  } else {
    rollbackTransaction(transaction);
  }
}
