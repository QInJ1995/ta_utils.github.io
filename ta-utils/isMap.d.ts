/**
 * @category 基础方法
 * @import import isMap from '@yh/ta-utils/isMap'
 */
/**
 * 判断是否 Map 对象
 * @param val 值
 */
export declare function isMap(val: any): val is Map<any, any>;

declare module './ctor' {
  interface XEUtilsMethods {
    isMap: typeof isMap;
  }
}

export default isMap
