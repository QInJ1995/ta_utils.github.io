/**
 * @category 基础方法
 * @import import isSymbol from '@yh/ta-utils/isSymbol'
 */
/**
 * 判断是否 Symbol 对象
 * @param val 值
 */
export declare function isSymbol(val: any): val is symbol;

declare module './ctor' {
  interface XEUtilsMethods {
    isSymbol: typeof isSymbol;
  }
}

export default isSymbol
