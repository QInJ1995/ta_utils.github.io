/**
 * @category 日期处理
 * @import import getWhatMonth from '@yh/ta-utils/getWhatMonth'
 */
/**
 * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 月偏移量(默认0)、前几个月、后几个月
 */
export declare function getWhatMonth(date: string | Date | number, offset: number): Date;

/**
 * 返回前几月或后几月的日期,可以指定月初(first)、月末(last)、天数，默认当前
 * @param date 字符串/日期/时间戳
 * @param offset 月偏移量(默认0)、前几个月、后几个月
 * @param day 获取哪天：月初(first)、月末(last)、指定天数(数值)
 */
export declare function getWhatMonth(date: string | Date | number, offset: number, day: number | 'first' | 'last'): Date;

declare module './ctor' {
  interface XEUtilsMethods {
    getWhatMonth: typeof getWhatMonth;
  }
}

export default getWhatMonth
