/**
 * @category 数组工具
 * @import import indexOf from '@yh/ta-utils/indexOf'
 */
/**
 * 返回对象第一个索引值
 * @param obj 对象
 * @param val 值
 */
export declare function indexOf(obj: any, val: any): number;

declare module './ctor' {
  interface XEUtilsMethods {
    indexOf: typeof indexOf;
  }
}

export default indexOf
