/**
 * @category 基础方法
 * @import import isInteger from '@yh/ta-utils/isInteger'
 */
/**
 * 判断是否整数
 * @param val 值
 */
export declare function isInteger(val: any): val is number;

declare module './ctor' {
  interface XEUtilsMethods {
    isInteger: typeof isInteger;
  }
}

export default isInteger
