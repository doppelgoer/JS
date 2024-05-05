/**
 * Check if input is finite number
 * @param input
 */
export function checkIsNumber(input: any): input is number {
  return typeof input === 'number' && Number.isFinite(input);
}

/**
 * Convert input to Number (default: 0)
 * @param input
 * @param keepUndefined
 */
export function toNumber(input: any, keepUndefined = false): number {
  if (keepUndefined && input === undefined) return input;

  const result = Number(input);
  if (Number.isNaN(result)) return 0;
  else return result;
}

/**
 * Convert input to String (default: '')
 * @param input
 * @param keepUndefined
 */
export function toString(input: any, keepUndefined = false): string {
  if (keepUndefined && input === undefined) return input;

  if (input === null || input === undefined) return '';
  else return String(input);
}

/**
 * Sanitize number
 * @param param
 * @param param.value
 * @param param.default
 * @param [param.min]
 * @param [param.max]
 */
export function sanitizeNumber(param: ISanitizeNumberParam): number {
  let result = Number(param.value);
  if (Number.isNaN(result)) result = param.default;
  if (param.min !== undefined && result < param.min) result = param.min;
  else if (param.max !== undefined && result > param.max) result = param.max;

  return result;
}

/**
 * Sanitize enum
 * @param param
 * @param param.value
 * @param param.enumList
 * @param [param.default] default가 없을 경우 list의 첫번째 아이템을 리턴
 */
export function sanitizeEnum<T>(param: ISanitizeEnumParam<T>) {
  const { value, enumList } = param;
  if (enumList.indexOf(value) !== -1) return value;
  else if (Object.keys(param).indexOf('default') !== -1) return param.default;
  else return enumList[0];
}

interface ISanitizeNumberParam {
  value: number | string;
  default: number;
  min?: number;
  max?: number;
}

interface ISanitizeEnumParam<T> {
  value: T;
  enumList: T[];
  default?: T;
}
