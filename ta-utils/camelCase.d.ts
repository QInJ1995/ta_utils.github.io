/**
 * @category 字符串处理
 * @import import camelCase from '@yh/ta-utils/camelCase'
 */
/**
 * 将带字符串转成驼峰字符串,例如： project-name 转为 projectName
 * @param str 字符串
 */
export declare function camelCase(str: string): string;

declare module './ctor' {
  interface XEUtilsMethods {
    camelCase: typeof camelCase;
  }
}

export default camelCase
