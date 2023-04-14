/**
 * @category 数据处理
 * @import import toNumberString from '@yh/ta-utils/toNumberString'
 */
/**
 * 数值转字符串，科学计数转字符串
 * @param num 数值
 */
export declare function toNumberString(num: number | string | null): string;
export declare function toNumberString(num: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toNumberString: typeof toNumberString;
  }
}

export default toNumberString
