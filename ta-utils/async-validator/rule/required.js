import {format, isEmptyValue} from '../util'

/**
 *  Rule for validating required fields.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param source The source object being validated.
 *  @param errors An array of errors that this rule may add
 *  validation errors to.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
function required (rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    // add by Selina 表单验证message为''时不显示验证文字
    if (rule.message !== undefined && rule.message.trim().length === 0) {
      errors.push('')
    } else {
      errors.push(format(options.messages.required, rule.fullField))
    }
  }
}

export default required
