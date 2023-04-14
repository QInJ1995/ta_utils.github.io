/**
 * @category 基础方法
 * @import import isElement from '@yh/ta-utils/isElement'
 */
/**
 * 判断是否 Element 对象
 * @param val 值
 */
export declare function isElement(val: any): val is Element;

declare module './ctor' {
  interface XEUtilsMethods {
    isElement: typeof isElement;
  }
}

export default isElement
