import { Context } from 'koa';
import { Transaction } from 'sequelize';
import { IKoaBodyOptions } from 'koa-body';
import { LoginInfo } from 'src/schema/sequelize/MemberModel';

export interface KoaAppContext extends Context {
  params: any;
  query: any;
  body: KoaAppResponseBody;
  state: KoaAppState;
}

export interface KoaAppResponseBody {
  code: ResCode;
  message: string;
  data?: any;
}

export interface KoaAppState {
  reqId: string;
  reqTime: number;
  loginInfo?: LoginInfo;
  isLoggedIn: boolean;
  isAdmin: boolean;
  transaction?: Transaction;
}

export type KoaAppMiddlewareOption = AccessMiddlewareOption &
  BodyMiddlewareOption &
  AuthMiddlewareOption &
  CheckPermissionMiddlewareOption &
  TransactionMiddlewareOption;

export interface AccessMiddlewareOption {
  loggingParameters?: boolean;
}

export interface AuthMiddlewareOption {
  useSession?: boolean;
}

export interface BodyMiddlewareOption {
  bodyOption?: IKoaBodyOptions;
}

export interface CheckPermissionMiddlewareOption {
  requireLogin?: boolean;
  requireAdmin?: boolean;
}

export interface TransactionMiddlewareOption {
  useTransaction?: boolean;
}

export enum ResCode {
  // 정상
  OK = 0,

  // REQUEST 관련 에러 - 100XX
  REQUEST_INVALID_JSON = 10001,
  REQUEST_INVALID_PARAM = 10002,
  REQUEST_NOT_FOUND = 10003,

  // AUTH 관련 에러 - 102XX
  AUTH_NEED_LOGIN = 10201,
  AUTH_NEED_ADMIN = 10202,
  AUTH_TOKEN_EXPIRED = 10203,
  AUTH_TOKEN_INVALID = 10204,
  AUTH_WRONG_ID_PW = 10205,
  AUTH_UNAPPROVED_ACCOUNT = 10206,
  AUTH_SUSPENDED_ACCOUNT = 10207,

  // MEMBER 관련 에러 - 103XX
  MEMBER_NOT_EXISTS = 10301,
  MEMBER_ID_ALREADY_EXISTS = 10302,
  MEMBER_NICKNAME_ALREADY_EXISTS = 10303,
  MEMBER_EMAIL_ALREADY_EXISTS = 10304,
  MEMBER_INVALID_NAME = 10305,
  MEMBER_INVALID_NICKNAME = 10306,

  // UPLOAD 관련 에러 - 104XX
  UPLOAD_MIME_TYPE_NOT_ALLOWED = 10401,
  UPLOAD_INVALID_FILE = 10402,
  UPLOAD_TOO_LARGE = 10403,
  UPLOAD_NOT_EXISTS = 10404,

  // 알 수 없는 오류
  UNKNOWN_ERROR = 99999,
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}
