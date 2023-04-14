import rules from '../rule/'
import { isEmptyValue, } from '../util'

function type (rule, value, callback, source, options) {
  let ruleType = rule.type
  let errors = []
  let validate = rule.required || !rule.required && source.hasOwnProperty(rule.field)
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback()
    }
    rules.required(rule, value, source, errors, options, ruleType)
    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options)
    }
  }
  callback(errors)
}

export default type
