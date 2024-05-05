import { ResCode } from 'src/type';

export default class CustomError extends Error {
  status: number;
  code: number;
  message: string;
  data?: any;
  logging: boolean;

  constructor(code: number, option: CustomErrorOption = {}) {
    // 에러코드의 이름을 조회
    const codeName = ResCode[code] || 'UNKNOWN_ERROR';
    super(codeName);
    Error.captureStackTrace(this, CustomError);

    // Custom Error 객체 수정
    this.code = code;
    this.message = codeName;
    this.data = option.data;
    this.logging = option.logging ?? false;
    this.status = option.status ?? 400;
  }
}

export function getErrorResponse(error: any) {
  if (error instanceof SyntaxError) {
    return {
      status: 400,
      code: ResCode.REQUEST_INVALID_JSON,
    };
  } else if (error instanceof CustomError) {
    return {
      status: error.status,
      code: error.code,
      data: error.data,
    };
  } else {
    return {
      status: 500,
      code: ResCode.UNKNOWN_ERROR,
    };
  }
}

interface CustomErrorOption {
  status?: number;
  data?: any;
  logging?: boolean;
}
