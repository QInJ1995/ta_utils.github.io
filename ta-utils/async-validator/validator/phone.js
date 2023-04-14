const mobileRegex = /^1[3456789]\d{9}$/
const fixRegex = /0\d{2,3}-\d{7,8}/

/**
 *  Validates a phone number.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
// eslint-disable-next-line no-unused-vars
function phone (rule, value, callback, source, options) {
  // fix by jianglw : value可能为undefined时，会导致NPE
  if (!value) {
    callback()
    return
  }
  let errors = []
  let phoneType = rule['phone']
  switch (phoneType) {
    case 'fix':
      validateFixPhone(value, errors)
      break
    case 'mobile':
    default:
      validateMobilePhone(value, errors)
      break
  }
  callback(errors)
}
function validateMobilePhone (value, errors) {
  if (mobileRegex.test(value)) {
    return
  }
  errors.push('手机号码格式不正确')
}

function validateFixPhone (value, errors) {
  if (fixRegex.test(value)) {
    return
  }
  errors.push('固定电话号码格式不正确')
}

export default phone
