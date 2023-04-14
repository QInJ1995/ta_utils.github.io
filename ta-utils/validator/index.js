/**
 * 对提供的值进行校验
 *
 * @module async-validator
 * @import import validator from '@yh/ta-utils/validator'
 * @example validator(rules,values,options,callback)
 * @category 验证工具
 *
 */
/**
 *
 */
import AsyncValidator from '../async-validator';
/**
 *
 * @param rules
 * @param values
 * @param options
 * @param cb
 */
export default function (rules, values, { first = false, firstFields = [], force = false, scroll = {}, focus = false, } = { first: false, firstFields: [], force: false, scroll: {}, focus: false }, cb) {
    const asyncValidator = new AsyncValidator(rules);
    asyncValidator.validate(values, { first, firstFields, force, scroll, focus }, (errors) => {
        if (cb !== undefined) {
            cb(errors);
        }
    });
}
