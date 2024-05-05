import config from 'src/config';
import * as authSvc from 'src/app/auth/authSvc';
import * as memberSvc from 'src/app/member/memberSvc';

import { KoaAppContext } from 'src/type';
import { MemberModel } from 'src/schema/sequelize/MemberModel';
import { LoginBody, RenewTokenBody } from 'src/app/auth/authValidator';

const { ttl: ACCESS_TOKEN_TTL } = config.auth.accessToken;

export async function getLoginInfo(ctx: KoaAppContext) {
  if (!ctx.state.loginInfo) return;

  const member = await memberSvc.getMember(ctx.state.loginInfo.id);
  return member ? MemberModel.sanitize(member) : undefined;
}

export async function login(ctx: KoaAppContext) {
  const reqBody = <LoginBody>ctx.request.body;
  const { accessToken, refreshToken } = await authSvc.login(reqBody);

  ctx.cookies.set('acc', accessToken, { expires: new Date(Date.now() + ACCESS_TOKEN_TTL * 1000) });
  return { refreshToken };
}

export async function renewToken(ctx: KoaAppContext) {
  const reqBody = <RenewTokenBody>ctx.request.body;
  const { accessToken, refreshToken } = await authSvc.renewToken(reqBody.refreshToken);

  ctx.cookies.set('acc', accessToken, { expires: new Date(Date.now() + ACCESS_TOKEN_TTL * 1000) });
  if (refreshToken) return { refreshToken };
}

export function logout(ctx: KoaAppContext) {
  ctx.cookies.set('acc');
}
