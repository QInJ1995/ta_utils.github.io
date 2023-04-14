/**
 * @category 敏感数据处理
 * @module sensitiveData
 * @import import data, { cnMoneyFormat, floatAdd, moneyFormat } from '@yh/ta-utils/data'
 * const {format,formatWithReq,formatWithIndex,} = data
 */

export declare const dataSensitive: {
  formatWithIndex(value: string, indexRule: Array): string;

  format(type: string, value: string): string;

  formatWithReq(value: string, regex: RegExp): string;
}
export function moneyFormat(money: number, decimal: number, symbol: string): string;
export function cnMoneyFormat(money: number): string;
export function floatAdd(arg1: number, arg2: number): number;
export default dataSensitive
