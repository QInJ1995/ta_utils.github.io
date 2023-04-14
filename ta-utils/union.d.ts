/**
 * @category 数组工具
 * @import import union from '@yh/ta-utils/union'
 */
/**
 * 将多个数的值返回唯一的并集数组
 * @param array 数组
 */
export declare function union(...array: any[]): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    union: typeof union;
  }
}

export default union
