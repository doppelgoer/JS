import * as memberSvc from 'src/app/member/memberSvc';

import { AddMemberBody, GetMemberListQuery, GetMemberParam, UpdateMemberBody } from 'src/app/member/memberValidator';
import { KoaAppContext } from 'src/type';
import { MemberModel } from 'src/schema/sequelize/MemberModel';

export async function getMember(ctx: KoaAppContext) {
  const { id } = <GetMemberParam>ctx.params;
  const member = await memberSvc.getMember(id);
  return member ? MemberModel.sanitize(member) : undefined;
}

export async function getMemberList(ctx: KoaAppContext) {
  const reqQuery = <GetMemberListQuery>ctx.query;
  return memberSvc.getMemberList(reqQuery);
}

export async function addMember(ctx: KoaAppContext) {
  const reqBody = <AddMemberBody>ctx.request.body;
  const { transaction } = ctx.state;
  return memberSvc.addMember(reqBody, { transaction });
}

export async function updateMember(ctx: KoaAppContext) {
  const { id } = <GetMemberParam>ctx.params;
  const reqBody = <UpdateMemberBody>ctx.request.body;
  const { transaction } = ctx.state;
  return memberSvc.updateMember(id, reqBody, { transaction });
}
