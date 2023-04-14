import rules from '../rule/'
import { isEmptyValue, } from '../util'

/**
 *  Validates a number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function number (rule, value, callback, source, options) {
  let errors = []
  // fixed by jianglw: 用户输入的值value，被处理为string，需要进行一次类型转换
  // 若，value不是number类型，则应该将其与NaN进行比较，若为NaN则说明输入与期望不一致。
  try {
    value = Number(value)
    if (Object.is(value, NaN)) {
      rules.type(rule, value, source, errors, options)
      throw new Error('')
    }
  } catch (e) {
    callback(errors)
    return
  }
  let validate = rule.required || !rule.required && source.hasOwnProperty(rule.field)
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback()
    }
    rules.required(rule, value, source, errors, options)
    if (value !== undefined) {
      rules.type(rule, value, source, errors, options)
      rules.range(rule, value, source, errors, options)
    }
  }
  callback(errors)
}

export default number
