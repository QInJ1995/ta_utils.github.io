/**
 * @category 基础方法
 * @import import isDate from '@yh/ta-utils/isDate'
 */
/**
 * 判断是否 Date 对象
 * @param val 值
 */
export declare function isDate(val: any): val is Date;

declare module './ctor' {
  interface XEUtilsMethods {
    isDate: typeof isDate;
  }
}

export default isDate
