/**
 * @category 浏览器工具
 * @import import locat from '@yh/ta-utils/locat'
 */
/**
 *
 */
import { XEUrl } from './url'

/**
 * 获取地址栏信息
 */
export declare function locat(): XEUrl;

declare module './ctor' {
  interface XEUtilsMethods {
    locat: typeof locat;
  }
}

export default locat
