/**
 * @category 其他工具
 */
/**
 *
 * @import
 *
 * import uniqBy from '@yh/ta-utils/uniqBy'
 *
 * @description This method is like `uniq` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * uniqueness is computed. The order of result values is determined by the
 * order they occur in the array. The iteratee is invoked with one argument:
 * (value).
 *
 * @param {Array} array The array to inspect.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @see uniq, uniqWith
 * @example
 *
 * uniqBy([2.1, 1.2, 2.3], Math.floor)
 * // => [2.1, 1.2]
 */
export declare function uniqBy (array:Array, iteratee:Function): Array;
export default uniqBy;