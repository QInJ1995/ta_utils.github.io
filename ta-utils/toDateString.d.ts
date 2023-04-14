/**
 * @category 日期处理
 * @import import toDateString from '@yh/ta-utils/toDateString'
 *
 * | 符号 | 含义 |
 * | --- | --- |
 * | yy\|yyyy\|YY\|YYYY | 年份 |
 * | M\|MM | 月份 |
 * | d\|dd\|D\|DD | 天 |
 * | h\|hh | 12小时制 |
 * | H\|HH | 12小时制 |
 * | m\|mm | 分 |
 * | s\|ss | 秒 |
 * | S\|SSS | 毫秒 |
 * | O|OOO | 当年第几天 |
 * | a\|A | 上午下午 |
 * | e\|E | 星期几 |
 * | w\|ww | 当年的第几周 |
 * | W\|WW | 当月的第几周 |
 * | Q\|q | 当年第几个季度 |
 * | Z\|ZZ | 时区 |
 *
 *
 */
/**
 * 日期格式化为字符串，转义符号 []
 *
 * @param {Date} date 日期或数字
 * @param {String} format 输出日期格式(年份(yy|yyyy)、月份(M|MM自动补0)、天(d|dd自动补0)、12小时制(h|hh自动补0)、24小时制(H|HH自动补0)、分钟(m|mm自动补0)、秒(s|ss自动补0)、毫秒(S|SSS自动补0)、O当年的第几天、a/A上午下午、e/E星期几、w当年的第几周、W当月的第几周、q当年第几个季度、Z时区)
 * @param {Object} options {formats: {q: ['日', '一', '二', '三', '四', '五', '六'], E: function (value, match, date) {return '三'}, }} 自定义格式化模板
 * @return {String}
 */
/**
 *
 */
export interface ToDateStringOptions {
  /**
   * 自定义格式化模板
   * {
   *   formats: {
   *     q: ['日', '一', '二', '三', '四', '五', '六'],
   *     E: function (value, match, date) { return '三' }
   *   }
   * }
   */
  formats?: any
}

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 */
export declare function toDateString(date: string | Date | number): string;
export declare function toDateString(date: any): string;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 */
export declare function toDateString(date: string | Date | number, format: string | null): string;
export declare function toDateString(date: any, format: string | null): string;

/**
 * 日期格式化为任意格式字符串，转义符号 []
 * @param date 字符串/日期/时间戳
 * @param format 格式化 默认：yyyy-MM-dd HH:mm:ss.SSS
 * @param options 可选参数
 */
export declare function toDateString(date: string | Date | number, format: string | null, options: ToDateStringOptions): string;
export declare function toDateString(date: any, format: string | null, options: ToDateStringOptions): string;

declare module './ctor' {
  interface XEUtilsMethods {
    toDateString: typeof toDateString;
  }
}

export default toDateString
