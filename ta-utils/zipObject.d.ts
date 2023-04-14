/**
 * @category 数组工具
 * @import import zipObject from '@yh/ta-utils/zipObject'
 */
/**
 * 将每个数组中相应位置的值合并在一起
 * @param props 键数组
 * @param values 值数组
 * @example
 */
export declare function zipObject(props: any[], values: any[]): any;

declare module './ctor' {
  interface XEUtilsMethods {
    zipObject: typeof zipObject;
  }
}

export default zipObject
