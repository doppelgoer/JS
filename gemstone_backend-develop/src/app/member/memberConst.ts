export const PREVENT_WORD_LIST = [
  'admin',
  'sysadmin',
  'system',
  'superuser',
  'root',
  'sysop',
  'master',
  '관리자',
  '최고관리자',
  '어드민',
  '시샵',
  '시스템관리자',
  '서버관리자',
  '운영자',
  'list',
  'bulk',
];

export const ID_PATTERN = /^[a-zA-Z0-9_\-.]{4,32}$/;
export const PW_PATTERN = /^[a-zA-Z0-9!@#$%^&*()\\|[\]{};:'",.<>/?`~ \-_+=]{6,32}$/;
export const NAME_PATTERN = /^[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_.-]{2,32}$/;
