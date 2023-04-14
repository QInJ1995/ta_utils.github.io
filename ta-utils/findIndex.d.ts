/**
 * @category 其他工具
 */
/**
 *
 * The base implementation of `findIndex` and `findLastIndex`.
 * @import
 *
 * import findIndex from '@yh/ta-utils/findIndex'
 *
 *
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
export declare function findIndex (array:Array,predicate: Function, fromIndex:number, fromRight?:boolean):number;
export default findIndex;
