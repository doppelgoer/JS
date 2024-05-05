import { fn } from 'sequelize';
import CustomError from 'src/util/CustomError';
import config from 'src/config';

import { createAccessToken, createRefreshToken, parseRefreshToken } from 'src/app/auth/authUtil';
import { verifyPassword } from 'src/app/member/memberUtil';

import { ResCode } from 'src/type';
import { MemberModel, MemberStatus } from 'src/schema/sequelize/MemberModel';
import { LoginBody } from 'src/app/auth/authValidator';

const { ttl: ACCESS_TOKEN_TTL } = config.auth.accessToken;
const {
  ttl: REFRESH_TOKEN_TTL,
  ttlLong: REFRESH_TOKEN_TTL_LONG,
  remainTimeToRenew: REFRESH_TOKEN_RENEW_TIME,
} = config.auth.refreshToken;

export async function login({ id, password, keepLogin }: LoginBody) {
  const member = await MemberModel.findOne({ where: { id } });
  if (!member || !verifyPassword(member, password)) throw new CustomError(ResCode.AUTH_WRONG_ID_PW);
  else if (member.status === MemberStatus.NOT_APPROVED) throw new CustomError(ResCode.AUTH_UNAPPROVED_ACCOUNT);
  else if (member.status === MemberStatus.SUSPENDED) throw new CustomError(ResCode.AUTH_SUSPENDED_ACCOUNT);

  const loginInfo = { id: member.id, type: member.type };
  const accessToken = await createAccessToken(loginInfo, ACCESS_TOKEN_TTL);
  const refreshToken = createRefreshToken(member, keepLogin ? REFRESH_TOKEN_TTL_LONG : REFRESH_TOKEN_TTL);
  await MemberModel.update({ lastLoginAt: fn('NOW') }, { where: { id } });

  return { accessToken, refreshToken };
}

export async function renewToken(refreshToken: string) {
  const { exp, member } = await parseRefreshToken(refreshToken);
  const nowTime = Math.floor(Date.now() / 1000);
  const remainTime = exp - nowTime;

  if (member.status === MemberStatus.NOT_APPROVED) throw new CustomError(ResCode.AUTH_UNAPPROVED_ACCOUNT);
  else if (member.status === MemberStatus.SUSPENDED) throw new CustomError(ResCode.AUTH_SUSPENDED_ACCOUNT);
  else if (remainTime < 0) throw new CustomError(ResCode.AUTH_TOKEN_EXPIRED);

  const loginInfo = { id: member.id, type: member.type };
  const newAccessToken = await createAccessToken(loginInfo, ACCESS_TOKEN_TTL);
  const newRefreshToken = remainTime < REFRESH_TOKEN_RENEW_TIME ? createRefreshToken(member) : undefined;
  return { accessToken: newAccessToken, refreshToken: newRefreshToken };
}
