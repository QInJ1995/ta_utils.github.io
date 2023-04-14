/**
 * @category 字符串处理
 * @import import escape from '@yh/ta-utils/escape'
 */
/**
 * 转义HTML字符串，替换&, <, >, ", ', \`字符
 * @param str 字符串
 */
export declare function escape(str: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    escape: typeof escape;
  }
}

export default escape
