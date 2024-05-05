import { Op, fn, FindOptions, FindAndCountOptions, CreateOptions, UpdateOptions } from 'sequelize';

import config from 'src/config';
import CustomError from 'src/util/CustomError';
import { UpdateData } from 'src/util/sequelize';
import { createRandomHash } from 'src/util/cryptoUtil';
import { createPasswordHash } from 'src/app/member/memberUtil';
import { removeUploadFile, saveTempFile } from 'src/app/upload/uploadSvc';

import { ResCode } from 'src/type';
import { MemberModel } from 'src/schema/sequelize/MemberModel';
import { AddMemberBody, GetMemberListQuery, UpdateMemberBody } from 'src/app/member/memberValidator';
import { PREVENT_WORD_LIST } from 'src/app/member/memberConst';

export async function getMember(id: string, option?: Partial<FindOptions<MemberModel['_attributes']>>) {
  return MemberModel.findOne({ where: { id }, ...option });
}

export async function getMemberList(
  { limit, offset, sortBy, sortOrder }: GetMemberListQuery,
  option?: Partial<FindAndCountOptions<MemberModel['_attributes']>>
) {
  const columnList: (keyof MemberModel)[] = [
    'no',
    'id',
    'nickname',
    'name',
    'status',
    'type',
    'lastLoginAt',
    'createdAt',
  ];

  return MemberModel.findAndCountAll({
    attributes: columnList,
    offset,
    limit,
    order: [[sortBy, sortOrder]],
    ...option,
  });
}

export async function addMember(param: AddMemberBody, option?: Partial<CreateOptions<MemberModel['_attributes']>>) {
  const { id, password, name, nickname, email, profileImage } = param;
  const transaction = option?.transaction!;

  const isInvalidName = PREVENT_WORD_LIST.indexOf(name) !== -1;
  if (isInvalidName) throw new CustomError(ResCode.MEMBER_INVALID_NAME);

  const isInvalidNickname = PREVENT_WORD_LIST.indexOf(nickname) !== -1;
  if (isInvalidNickname) throw new CustomError(ResCode.MEMBER_INVALID_NICKNAME);

  const isSameIdExists = !!(await MemberModel.count({ where: { id }, transaction }));
  if (isSameIdExists) throw new CustomError(ResCode.MEMBER_ID_ALREADY_EXISTS);

  const isSameNickExists = !!(await MemberModel.count({ where: { nickname }, transaction }));
  if (isSameNickExists) throw new CustomError(ResCode.MEMBER_NICKNAME_ALREADY_EXISTS);

  const isSameEmailExists = !!(await MemberModel.count({ where: { email }, transaction }));
  if (isSameEmailExists) throw new CustomError(ResCode.MEMBER_EMAIL_ALREADY_EXISTS);

  if (profileImage) await saveTempFile(profileImage, config.data.profile.path, transaction);

  const salt = createRandomHash(32);
  const passwordHash = createPasswordHash(password, salt);

  // AutoIncrement 필드가 create에선 number로 조회되는 이슈로 수정
  const createdMember = await MemberModel.create({ ...param, password: passwordHash, salt }, option);
  createdMember.no = String(createdMember.no);
  return MemberModel.sanitize(createdMember);
}

export async function updateMember(
  id: string,
  param: UpdateMemberBody,
  option?: Partial<UpdateOptions<MemberModel['_attributes']>>
) {
  const { password, name, nickname, email, profileImage } = param;
  const transaction = option?.transaction!;

  const member = await MemberModel.findOne({ where: { id }, transaction });
  if (!member) throw new CustomError(ResCode.MEMBER_NOT_EXISTS);

  const updateData: UpdateData<MemberModel> = { ...param };

  if (name) {
    const isInvalidName = PREVENT_WORD_LIST.indexOf(name) !== -1;
    if (isInvalidName) throw new CustomError(ResCode.MEMBER_INVALID_NAME);
  }

  if (nickname) {
    const isInvalidNickname = PREVENT_WORD_LIST.indexOf(nickname) !== -1;
    if (isInvalidNickname) throw new CustomError(ResCode.MEMBER_INVALID_NICKNAME);

    const isSameNickExists = !!(await MemberModel.count({
      where: { nickname, id: { [Op.not]: id } },
      transaction,
    }));
    if (isSameNickExists) throw new CustomError(ResCode.MEMBER_NICKNAME_ALREADY_EXISTS);
  }

  if (email) {
    const isSameEmailExists = !!(await MemberModel.count({
      where: { email, id: { [Op.not]: id } },
      transaction,
    }));
    if (isSameEmailExists) throw new CustomError(ResCode.MEMBER_EMAIL_ALREADY_EXISTS);
  }

  if (profileImage !== undefined) {
    if (profileImage !== '') await saveTempFile(profileImage, config.data.profile.path, transaction);
    // 기존 이미지 제거는 비동기로 처리
    if (member.profileImage && member.profileImage !== profileImage) removeUploadFile(member.profileImage);
  }

  if (password) {
    const salt = createRandomHash(32);
    const passwordHash = createPasswordHash(password, salt);
    updateData.salt = salt;
    updateData.password = passwordHash;
    updateData.passwordChangedAt = fn('NOW');
  }

  await MemberModel.update(updateData, { where: { id }, ...option });
}
