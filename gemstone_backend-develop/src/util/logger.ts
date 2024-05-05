import winston, { format } from 'winston';

import config from 'src/config';
import { zerofill } from 'src/util/commonUtil';
import asyncLocalStorage from 'src/util/asyncLocalStorage';

const Logger = winston.createLogger({
  format: format.printf((info) => {
    return `${_getTimeString()} ${info.level} ${info.message}`;
  }),
  transports: [
    new winston.transports.Console({
      level: config.log.level,
    }),
  ],
});

function _getTimeString(date = new Date()) {
  const HH = zerofill(date.getHours(), 2);
  const mm = zerofill(date.getMinutes(), 2);
  const ss = zerofill(date.getSeconds(), 2);
  const SSS = zerofill(date.getMilliseconds(), 3);
  return `${HH}:${mm}:${ss}.${SSS}`;
}

function _toString(param?: any, singleLineMode = false) {
  if (param === undefined) {
    return '';
  } else if (typeof param === 'string') {
    return param;
  } else if (param instanceof Error) {
    let result = '';
    const attrObject: Partial<typeof param> = {};
    for (const key of Object.keys(param) as Array<keyof typeof param>) {
      attrObject[key] = param[key];
    }

    if (singleLineMode) {
      result += param.stack?.replace(/\n/g, '').replace(/ +/g, ' ') || '';
      result += `, ${_toString(attrObject)}`;
    } else {
      result += param.stack;
      result += `\n${_toString(attrObject)}`;
    }

    return result;
  } else if (typeof param === 'object') {
    try {
      return JSON.stringify(param);
    } catch (ignore) {
      return '';
    }
  } else {
    return String(param);
  }
}

function _toMessage(MODULE_NAME: string, args: any[], singleLineMode = false) {
  const { ctx } = asyncLocalStorage.getStore() || {};
  const reqId = ctx?.state.reqId;

  // 모든 args를 String으로 변환하여 message로 합침
  const separator = singleLineMode ? ' | ' : '\n';
  let result = '';

  for (let i = 0; i < args.length; i++) {
    if (args[i] === undefined) continue;
    result += `${separator}${_toString(args[i])}`;
  }
  const message = result.slice(separator.length);

  return `${reqId ? `<${reqId}> ` : ''}[${MODULE_NAME}] ${message}`;
}

export function createLogger(__filename: string) {
  const filenameMatch = /([^/\\]+?).(js|ts)$/.exec(__filename);
  const MODULE_NAME = filenameMatch && filenameMatch[1];

  function debug(...args: any[]) {
    Logger.debug(_toMessage(MODULE_NAME || 'unknown', args, config.log.singleLine));
  }

  function info(...args: any[]) {
    Logger.info(_toMessage(MODULE_NAME || 'unknown', args, config.log.singleLine));
  }

  function warn(...args: any[]) {
    Logger.warn(_toMessage(MODULE_NAME || 'unknown', args, config.log.singleLine));
  }

  function error(...args: any[]) {
    Logger.error(_toMessage(MODULE_NAME || 'unknown', args, config.log.singleLine));
  }

  return { debug, info, warn, error };
}
