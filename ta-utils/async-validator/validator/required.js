import rules from '../rule/'

function required (rule, value, callback, source, options) {
  let errors = []
  let type = Array.isArray(value) ? 'array' : typeof value === 'undefined' ? 'undefined' : typeof (value)
  rules.required(rule, value, source, errors, options, type)
  callback(errors)
}

export default required
