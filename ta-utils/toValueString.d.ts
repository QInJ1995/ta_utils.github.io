/**
 * @category 字符串工具
 * @import import toValueString from '@yh/ta-utils/toValueString'
 */
/**
 * 转字符串
 * @param obj 值
 */
 export declare function toValueString(obj: number | string | any[]): string;
 export declare function toValueString(obj: any): string;

 declare module './ctor' {
   interface XEUtilsMethods {
    toValueString: typeof toValueString;
   }
 }

 export default toValueString
