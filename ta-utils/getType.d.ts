/**
 * @category 基础方法
 * @import import getType from '@yh/ta-utils/getType'
 */
/**
 * 获取对象类型
 * @param obj 对象
 */
export declare function getType(obj: any): string;

declare module './ctor' {
  interface XEUtilsMethods {
    getType: typeof getType;
  }
}

export default getType
