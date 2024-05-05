import { Sequelize, Options, Model, Transaction, FindOptions } from 'sequelize';

import config from 'src/config';
import { createLogger } from 'src/util/logger';
import { Col, Fn, Literal } from 'sequelize/types/lib/utils';

const logger = createLogger(__filename);

const sequelize = new Sequelize({
  ...config.sequelize,
  hooks: {
    afterConnect: () => logger.info('DB Connected'),
    afterDisconnect: () => logger.info('DB Disconnected'),
  },
} as Options);

export type CreateData<M extends Model> = M['_creationAttributes'];

export type UpdateData<M extends Model> = {
  [key in keyof M['_attributes']]?: M['_attributes'][key] | Fn | Col | Literal;
};

export function generateGetterSetterJSON(columnName: string) {
  function get(this: Model) {
    const text = this.getDataValue(columnName);

    try {
      return JSON.parse(text);
    } catch (error) {
      logger.error(`${columnName} getter error`, error);
      return {};
    }
  }

  function set(this: Model, value: any) {
    try {
      const valueText = JSON.stringify(value);
      this.setDataValue(columnName, valueText);
    } catch (error) {
      logger.error(`${columnName} setter error`, error);
      this.setDataValue(columnName, '{}');
    }
  }

  return {
    get,
    set,
  };
}

export function rollbackTransaction(transaction?: Transaction) {
  if (!transaction) return;
  return transaction.rollback().catch((error) => {
    logger.error('transaction.rollback() failed', error);
  });
}

export async function* getAllRowsGenerator<T extends Model>(
  model: any,
  limit = 1000,
  findAllOption?: FindOptions<T['_attributes']>
): AsyncGenerator<T> {
  let offset = 0;

  while (true) {
    const result = await model.findAll({ ...findAllOption, offset, limit });
    if (!result.length) break;
    for await (const row of result) yield row;
    offset += limit;
  }
}

export async function* getAllRowsBulkGenerator<T extends Model>(
  model: any,
  limit = 1000,
  findAllOption?: FindOptions<T['_attributes']>
): AsyncGenerator<T[]> {
  let offset = 0;

  while (true) {
    const result = await model.findAll({ ...findAllOption, offset, limit });
    if (!result.length) break;
    yield result;
    offset += limit;
  }
}

export default sequelize;
