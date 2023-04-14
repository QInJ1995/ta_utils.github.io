/**
 * @category 基础方法
 * @import import isUndefined from '@yh/ta-utils/isUndefined'
 */
/**
 * 判断 Undefined
 * @param val 值
 */
export declare function isUndefined(val: any): val is undefined;

declare module './ctor' {
  interface XEUtilsMethods {
    isUndefined: typeof isUndefined;
  }
}

export default isUndefined
