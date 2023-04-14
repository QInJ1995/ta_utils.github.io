/**
 * @category 字符串处理
 * @import import toString from '@yh/ta-utils/toString'
 */
/**
 * 转字符串
 * @param obj 值
 */
export declare function toString(obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toString: typeof toString;
  }
}

export default toString
