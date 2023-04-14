import {validate2ndIdCard, } from '../../validate2ndIdCard'
import { hkIdVerify, } from '../../hkIdVerify'
import {macauIdCard} from '../../macauIdCard'

/**
 *  Validates an ID card.
 *
 *  @param rule The validation rule.
 *  @param value The value of the field on the source object.
 *  @param callback The callback function.
 *  @param source The source object being validated.
 *  @param options The validation options.
 *  @param options.messages The validation messages.
 */
// eslint-disable-next-line no-unused-vars
function idCard(rule, value, callback, source, options) {
  // fix by jianglw : value可能为undefined时，会导致NPE
  if (!value) {
    callback()
    return
  }
  let errors = []
  let idCard = rule['idCard']
  switch (idCard) {
    case '2':
      validate2ndIdCard(value, errors)
      break
    case 'hk':
      hkIdVerify(value, errors)
      break
    case 'mo':
      macauIdCard(value, errors)
      break
    default:
      validate2ndIdCard(value, errors)
      break
  }
  callback(errors)
}


export default idCard
