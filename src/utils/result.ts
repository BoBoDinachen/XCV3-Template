import { Recoverable } from 'repl';



// 返回res.data的interface
export interface IResponse<T = any> {
  code: number | string;
  result: T;
  message: string;
  status: string | number;
}


// 返回统一格式的接口数据类型定义
export function successResult<T = Recoverable>(result: T, { message = 'Request success' } = {}) {
  return {
    code: 200,
    result,
    message,
    status: 'ok',
  };
}

export function errorResult(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    status: 'fail',
  };
}