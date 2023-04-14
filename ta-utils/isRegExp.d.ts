/**
 * @category 基础方法
 * @import import isRegExp from '@yh/ta-utils/isRegExp'
 */
/**
 * 判断是否 RegExp 对象
 * @param val 值
 */
export declare function isRegExp(val: any): val is RegExp;

declare module './ctor' {
  interface XEUtilsMethods {
    isRegExp: typeof isRegExp;
  }
}

export default isRegExp
