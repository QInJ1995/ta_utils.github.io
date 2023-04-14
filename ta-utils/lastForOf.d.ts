/**
 * 已废弃
 * @deprecated
 * @hidden
 * @category 数组工具
 */
/**
 *
 * @param obj
 * @param iterate
 * @param context
 */
export declare function lastForOf<C>(obj: any, iterate: (this: C, item: any, index: any, obj: any) => boolean, context?: C): void;

declare module './ctor' {
  interface XEUtilsMethods {
    lastForOf: typeof lastForOf;
  }
}

export default lastForOf
