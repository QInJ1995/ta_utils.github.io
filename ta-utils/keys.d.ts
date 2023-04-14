/**
 * @category 基础方法
 * @import import keys from '@yh/ta-utils/keys'
 */
/**
 * 获取对象所有属性
 * @param obj 对象
 */
export declare function keys(obj: any): string[];

declare module './ctor' {
  interface XEUtilsMethods {
    keys: typeof keys;
  }
}

export default keys
