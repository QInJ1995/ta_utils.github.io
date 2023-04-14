/**
 * @category 基础方法
 * @import import eqNull from '@yh/ta-utils/eqNull'
 */
/**
 * 判断是否 undefined 和 null
 * @param obj 对象
 */
export declare function eqNull(obj: any): boolean;

declare module './ctor' {
  interface XEUtilsMethods {
    eqNull: typeof eqNull;
  }
}

export default eqNull
