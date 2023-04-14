/**
 * @category 数据处理
 */
/**
 * 加法运算
 * @import import add from '@yh/ta-utils/add'
 * @examples add(1,2) //3
 * @param { Number } num1 被加数
 * @param { Number } num2 加数
 * @return {Number}
 */
export declare function add(num1: number, num2: number): number;

declare module './ctor' {
  interface XEUtilsMethods {
    add: typeof add;
  }
}

export default add
