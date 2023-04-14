/**
 * @category 数组工具
 * @import import unzip from '@yh/ta-utils/unzip'
 */
/**
 * 与 zip 相反
 * @param arrays 数组
 */
export declare function unzip(arrays: any[]): any[];

declare module './ctor' {
  interface XEUtilsMethods {
    unzip: typeof unzip;
  }
}

export default unzip
