/**
 * 计算两个浮点数相加的结果。
 * @method floatAdd
 * @param {Number} arg1 Number对象
 * @param {Number} arg2 Number对象
 * @return {Number}
 */
export function floatAdd(arg1, arg2) {
  let r1, r2
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  const m = Math.pow(10, Math.max(r1, r2))
  return ((arg1 * m + arg2 * m) / m).toFixed((m.toString()).length - 1)
}

export default floatAdd
