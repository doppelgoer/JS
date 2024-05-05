import jwt, { VerifyOptions } from 'jsonwebtoken';

import config from 'src/config';
import { createLogger } from 'src/util/logger';
import CustomError from 'src/util/CustomError';

import { aesDecrypt, aesEncrypt, createHash } from 'src/util/cryptoUtil';

import { ResCode } from 'src/type';
import { LoginInfo, MemberModel } from 'src/schema/sequelize/MemberModel';

const logger = createLogger(__filename);
const { secret: ACCESS_TOKEN_SECRET, ttl: ACCESS_TOKEN_TTL } = config.auth.accessToken;
const { ttl: REFRESH_TOKEN_TTL } = config.auth.refreshToken;

export async function createJwt<T>(payload: T, secret: string, ttl: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const iat = Math.floor(Date.now() / 1000);
    const exp = iat + ttl;
    jwt.sign({ ...payload, iat, exp }, secret, (error: any, token?: string) => {
      if (error) reject(error);
      else resolve(token!);
    });
  });
}

export async function verifyJwt<T>(token: string, secret: string, option?: VerifyOptions): Promise<T> {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, option, (error, decoded) => {
      if (error) reject(error);
      else resolve(decoded as T);
    });
  });
}

export function decodeJwt<T>(token: string): T {
  const result = jwt.decode(token) as T | null;
  if (result === null) throw new Error('Decode jwt failed');
  return result;
}

export async function createAccessToken(loginInfo: LoginInfo, ttl = ACCESS_TOKEN_TTL) {
  logger.info(`createAccessToken(${loginInfo.id})`);
  const secret = createAccessTokenSecret(loginInfo.id);
  return createJwt<LoginInfo>(loginInfo, secret, ttl);
}

function createAccessTokenSecret(id: string) {
  return createHash(`${id}${ACCESS_TOKEN_SECRET}`);
}

export function verifyAccessToken(accessToken: string): Promise<LoginInfo> {
  try {
    const payload = decodeJwt<LoginInfo>(accessToken);
    const secret = createAccessTokenSecret(payload.id);
    return verifyJwt<LoginInfo>(accessToken, secret);
  } catch (error) {
    logger.info(`Failed to verify accessToken`, accessToken);
    throw new CustomError(ResCode.AUTH_TOKEN_INVALID);
  }
}

export function createRefreshToken(member: MemberModel, ttl = REFRESH_TOKEN_TTL) {
  logger.info(`createRefreshToken(${member.id})`);
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + ttl;
  const secret = createRefreshTokenSecret(member);
  const token = Buffer.from(aesEncrypt(String(exp), secret), 'hex')
    .toString('base64')
    .replace(/=+$/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
  return `${token};${member.id}`;
}

export function createRefreshTokenSecret(member: MemberModel) {
  return createHash(`${member.salt}${member.password}`);
}

export async function parseRefreshToken(refreshToken: string) {
  logger.info('parseRefreshToken()');
  const [token, id] = refreshToken.split(';');
  const member = await MemberModel.findOne({ where: { id } });

  if (!member) {
    logger.info('Member not exists', refreshToken);
    throw new CustomError(ResCode.AUTH_TOKEN_INVALID);
  }

  try {
    const secret = createRefreshTokenSecret(member);
    const exp = Number(aesDecrypt(Buffer.from(token, 'base64').toString('hex'), secret)) ?? 0;
    return { member, exp };
  } catch (error) {
    throw new CustomError(ResCode.AUTH_TOKEN_INVALID);
  }
}
