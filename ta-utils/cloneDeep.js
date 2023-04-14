'use strict';
/**
 * Module dependenices
 */
import clone from './clone';
import typeOf from './typeOf';
import isPlainObject from './isPlainObject';
export function cloneDeep(val, instanceClone) {
    switch (typeOf(val)) {
        case 'object':
            return cloneObjectDeep(val, instanceClone);
        case 'array':
            return cloneArrayDeep(val, instanceClone);
        default: {
            return clone(val);
        }
    }
}
function cloneObjectDeep(val, instanceClone) {
    if (typeof instanceClone === 'function') {
        return instanceClone(val);
    }
    if (instanceClone || isPlainObject(val)) {
        const res = new val.constructor();
        for (let key in val) {
            res[key] = cloneDeep(val[key], instanceClone);
        }
        return res;
    }
    return val;
}
function cloneArrayDeep(val, instanceClone) {
    const res = new val.constructor(val.length);
    for (let i = 0; i < val.length; i++) {
        res[i] = cloneDeep(val[i], instanceClone);
    }
    return res;
}
/**
 * Expose `cloneDeep`
 */
export default cloneDeep;
