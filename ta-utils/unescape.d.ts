/**
 * @category 字符串处理
 * @import import unescape from '@yh/ta-utils/unescape'
 */
/**
 * 反转 escape
 * @param str 字符串
 */
export declare function unescape(str: string): string;
export declare function unescape(str: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    unescape: typeof unescape;
  }
}

export default unescape
