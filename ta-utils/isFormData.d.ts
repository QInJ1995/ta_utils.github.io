/**
 * @category 基础方法
 * @import import isFormData from '@yh/ta-utils/isFormData'
 */
/**
 * 判断是否 FormData 对象
 * @param val 值
 */
export declare function isFormData(val: any): val is FormData;

declare module './ctor' {
  interface XEUtilsMethods {
    isFormData: typeof isFormData;
  }
}

export default isFormData
