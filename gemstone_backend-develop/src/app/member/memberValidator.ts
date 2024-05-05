import { JSONSchemaType } from 'ajv';

import ajv from 'src/util/ajv';
import { ID_PATTERN, NAME_PATTERN, PW_PATTERN } from 'src/app/member/memberConst';
import { SortOrder } from 'src/type';
import { MemberModel, MemberStatus, MemberType } from 'src/schema/sequelize/MemberModel';
import { Optional } from 'sequelize';

export interface GetMemberParam {
  id: string;
}

const getMemberParamSchema: JSONSchemaType<GetMemberParam> = {
  type: 'object',
  additionalProperties: false,
  required: ['id'],
  properties: {
    id: { type: 'string' },
  },
};

export const validateGetMemberParam = ajv.compile(getMemberParamSchema);

export interface GetMemberListQuery {
  offset: number;
  limit: number;
  sortBy: keyof MemberModel;
  sortOrder: SortOrder;
  keyword?: string;
}

const getMemberListQuerySchema: JSONSchemaType<GetMemberListQuery> = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    offset: { type: 'integer', minimum: 0, default: 0 },
    limit: { type: 'integer', minimum: 1, maximum: 1000, default: 20 },
    sortBy: { type: 'string', enum: ['no', 'id', 'nickname'], default: 'no' },
    sortOrder: { type: 'string', enum: Object.values(SortOrder), default: SortOrder.DESC },
    keyword: { type: 'string', nullable: true },
  },
};

export const validateGetMemberListQuery = ajv.compile(getMemberListQuerySchema);

export interface AddMemberBody
  extends Optional<
    Pick<
      MemberModel,
      'id' | 'password' | 'nickname' | 'name' | 'address' | 'phone' | 'email' | 'profileImage' | 'status' | 'type'
    >,
    'profileImage'
  > {}

const addMemberBodySchema: JSONSchemaType<AddMemberBody> = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'password', 'nickname', 'name', 'email'],
  properties: {
    id: { type: 'string', regexp: ID_PATTERN.toString() },
    password: { type: 'string', regexp: PW_PATTERN.toString() },
    nickname: { type: 'string', regexp: NAME_PATTERN.toString() },
    name: { type: 'string', regexp: NAME_PATTERN.toString() },
    address: { type: 'string' },
    phone: { type: 'string' },
    email: { type: 'string', format: 'email', maxLength: 64 },
    profileImage: { type: 'string', nullable: true },
    status: { type: 'string', enum: Object.values(MemberStatus), default: MemberStatus.NORMAL },
    type: { type: 'string', enum: Object.values(MemberType), default: MemberType.NORMAL },
  },
};

export const validateAddMemberBody = ajv.compile(addMemberBodySchema);

export interface UpdateMemberBody extends Partial<Omit<AddMemberBody, 'id'>> {}

const updateMemberBodySchema: JSONSchemaType<UpdateMemberBody> = {
  type: 'object',
  additionalProperties: false,
  required: [],
  properties: {
    password: { type: 'string', regexp: PW_PATTERN.toString(), nullable: true },
    nickname: { type: 'string', regexp: NAME_PATTERN.toString(), nullable: true },
    name: { type: 'string', regexp: NAME_PATTERN.toString(), nullable: true },
    address: { type: 'string', nullable: true },
    phone: { type: 'string', nullable: true },
    email: { type: 'string', format: 'email', maxLength: 64, nullable: true },
    profileImage: { type: 'string', nullable: true },
    status: { type: 'string', enum: Object.values(MemberStatus), nullable: true },
    type: { type: 'string', enum: Object.values(MemberType), nullable: true },
  },
};

export const validateUpdateMemberBody = ajv.compile(updateMemberBodySchema);
