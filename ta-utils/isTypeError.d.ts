/**
 * @category 基础方法
 * @import import isTypeError from '@yh/ta-utils/isTypeError'
 */
/**
 * 判断是否 TypeError 对象
 * @param val 值
 */
export declare function isTypeError(val: any): val is TypeError;

declare module './ctor' {
  interface XEUtilsMethods {
    isTypeError: typeof isTypeError;
  }
}

export default isTypeError
