import { Next } from 'koa';
import { ValidateFunction } from 'ajv';
import CustomError from 'src/util/CustomError';
import { KoaAppContext, ResCode } from 'src/type';

export default function createValidateMiddleware(
  validate: ValidateFunction,
  inputSelector?: (ctx: KoaAppContext) => any
) {
  return async (ctx: KoaAppContext, next: Next) => {
    const input = inputSelector ? inputSelector(ctx) : ctx.request.body;
    const result = validate(input);
    if (result) return next();
    else throw new CustomError(ResCode.REQUEST_INVALID_PARAM, { data: validate.errors, logging: true });
  };
}
