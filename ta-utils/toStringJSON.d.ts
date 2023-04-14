/**
 * @category 基础方法
 * @import import toStringJSON from '@yh/ta-utils/toStringJSON'
 */
/**
 * 字符串转 JSON
 * @param str 字符串
 */
export declare function toStringJSON(str: string): any;
export declare function toStringJSON(str: any): any;

declare module './ctor' {
  interface XEUtilsMethods {
    toStringJSON: typeof toStringJSON;
  }
}

export default toStringJSON
