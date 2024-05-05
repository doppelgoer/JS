import { CustomErrorOption, ResCode } from "./type";

// import { CustomErrorOption, ResCode } from "./type.ts";
export default class CustomError extends Error {
  status: number;
  code: number;
  message: string;
  data?: any;
  // logging: boolean;

  constructor(code: number, option: CustomErrorOption = {}) {
    // 에러코드의 이름을 조회
    const codeName = ResCode[code] || "UNKNOWN_ERROR";
    super(codeName);
    // Error.captureStackTrace(this, CustomError);
    // Custom Error 객체 수정
    this.code = code;
    this.message = codeName;
    this.data = option.data;
    // this.logging = option.logging ?? false;
    this.status = option.status ?? 400;
  }
}
