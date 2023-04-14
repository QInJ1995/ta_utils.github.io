/**
 * @category 基础方法
 */
/**
 * 判断对象是否是空值
 * @param value
 * @param type
 */
export function isEmptyValue(value, type) {
    if (value === undefined || value === null) {
        return true;
    }
    if (type === 'array' && Array.isArray(value) && !value.length) {
        return true;
    }
    return isNativeStringType(type) && typeof value === 'string' && !value;
}
function isNativeStringType(type) {
    return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}
