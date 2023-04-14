/**
 * @category 其他工具
 */
/**
 *
 * @import
 *
 * import isArrayLikeObject from '@yh/ta-utils/isArrayLikeObject'
 *
 * @description This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */
export declare function isArrayLikeObject (value: any): boolean;
export default isArrayLikeObject;
