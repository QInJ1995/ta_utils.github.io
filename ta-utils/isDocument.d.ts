/**
 * @category 基础方法
 * @import import isDocument from '@yh/ta-utils/isDocument'
 */
/**
 * 判断是否 Document 对象
 * @param val 值
 */
export declare function isDocument(val: any): val is Document;

declare module './ctor' {
  interface XEUtilsMethods {
    isDocument: typeof isDocument;
  }
}

export default isDocument
