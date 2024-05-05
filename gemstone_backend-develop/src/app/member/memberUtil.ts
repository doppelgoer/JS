import { createHash } from 'src/util/cryptoUtil';

import { MemberModel } from 'src/schema/sequelize/MemberModel';

export function createPasswordHash(password: string, salt: string) {
  return createHash(salt + password);
}

export function verifyPassword(member: MemberModel, password: string) {
  return member.password === createPasswordHash(password, member.salt ?? '');
}
