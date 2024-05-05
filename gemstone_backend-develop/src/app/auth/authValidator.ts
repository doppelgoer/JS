import { JSONSchemaType } from 'ajv';
import ajv from 'src/util/ajv';

export interface LoginBody {
  id: string;
  password: string;
  keepLogin: boolean;
}

const loginBodySchema: JSONSchemaType<LoginBody> = {
  type: 'object',
  required: ['id', 'password'],
  additionalProperties: false,
  properties: {
    id: { type: 'string', minLength: 1, maxLength: 32 },
    password: { type: 'string', minLength: 1, maxLength: 32 },
    keepLogin: { type: 'boolean', default: false },
  },
};

export const validateLoginBody = ajv.compile(loginBodySchema);

export interface RenewTokenBody {
  refreshToken: string;
}

const renewTokenBodySchema: JSONSchemaType<RenewTokenBody> = {
  type: 'object',
  required: ['refreshToken'],
  additionalProperties: false,
  properties: {
    refreshToken: { type: 'string' },
  },
};

export const validateRenewTokenBody = ajv.compile(renewTokenBodySchema);
