/**
 * @category 日期处理
 * @import import now from '@yh/ta-utils/now'
 */
/**
 * 返回当前时间戳
 */
export declare function now(): number;

declare module './ctor' {
  interface XEUtilsMethods {
    now: typeof now;
  }
}

export default now
