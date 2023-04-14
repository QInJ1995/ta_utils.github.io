/**
 * @category 基础方法
 * @import import isString from '@yh/ta-utils/isString'
 */
/**
 * 判断是否String对象
 * @param val 值
 */
export declare function isString(val: any): val is string;

declare module './ctor' {
  interface XEUtilsMethods {
    isString: typeof isString;
  }
}

export default isString
