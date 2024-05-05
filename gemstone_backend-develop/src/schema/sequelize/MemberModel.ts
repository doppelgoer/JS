import { DataTypes, Optional, Model } from 'sequelize';
import sequelize, { generateGetterSetterJSON } from 'src/util/sequelize';
import { createPasswordHash } from 'src/app/member/memberUtil';
import { createLogger } from 'src/util/logger';

const logger = createLogger(__filename);

interface MemberModelBase {
  no: string;
  id: string;
  password: string;
  salt: string;
  type: MemberType;
  status: MemberStatus;
  nickname: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  profileImage: string;
  data: MemberData;
  lastLoginAt: Date;
  passwordChangedAt: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

interface CreateMemberModelBase
  extends Optional<
    Omit<MemberModelBase, 'no'>,
    'phone' | 'address' | 'profileImage' | 'status' | 'type' | 'data' | 'lastLoginAt' | 'passwordChangedAt'
  > {}

export interface LoginInfo {
  id: string;
  type: MemberType;
}

export interface MemberData {}

export enum MemberStatus {
  NORMAL = 'NORMAL',
  SUSPENDED = 'SUSPENDED',
  NOT_APPROVED = 'NOT_APPROVED',
}

export enum MemberType {
  NORMAL = 'NORMAL',
  ADMIN = 'ADMIN',
}

export class MemberModel extends Model<MemberModelBase, CreateMemberModelBase> implements MemberModelBase {
  public no!: string;
  public id!: string;
  public password!: string;
  public salt!: string;
  public nickname!: string;
  public name!: string;
  public address!: string;
  public phone!: string;
  public email!: string;
  public profileImage!: string;
  public status!: MemberStatus;
  public type!: MemberType;
  public data!: MemberData;
  public lastLoginAt!: Date;
  public passwordChangedAt!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static sanitize(member: MemberModel): SanitizedMemberModel {
    const sanitizedModel = MemberModel.build(member.get({ plain: true })) as any;
    sanitizedModel.password = undefined;
    sanitizedModel.salt = undefined;
    sanitizedModel.passwordChangedAt = undefined;
    return sanitizedModel;
  }
}

export interface SanitizedMemberModel extends Omit<MemberModel, 'password' | 'salt' | 'passwordChangedAt'> {}

export async function insertInitialMemberData() {
  logger.info('setupInitialData()');
  const salt = '6e12d9fa191fe8e51a440d317134e06c';
  const password = createPasswordHash('112213', salt);

  await MemberModel.findOrCreate({
    where: { id: 'admin' },
    defaults: {
      id: 'admin',
      password,
      salt,
      nickname: '관리자',
      name: '관리자',
      email: 'admin@gemstone',
      status: MemberStatus.NORMAL,
      type: MemberType.ADMIN,
      data: {},
    },
  });
}

MemberModel.init(
  {
    no: {
      type: DataTypes.BIGINT.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    salt: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    nickname: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    profileImage: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: MemberStatus.NORMAL,
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: MemberType.NORMAL,
    },
    data: {
      type: DataTypes.TEXT({ length: 'medium' }),
      allowNull: false,
      defaultValue: '{}',
      ...generateGetterSetterJSON('data'),
    },
    lastLoginAt: {
      type: DataTypes.DATE,
      defaultValue: null,
    },
    passwordChangedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: 'member',
    sequelize,
    indexes: [
      { fields: ['id'], unique: true },
      { fields: ['nickname'], unique: true },
      { fields: ['email'], unique: true },
      { fields: ['type'] },
    ],
  }
);
