import camelCase from './camelCase';
/**
 * aaa-bbb-ccc-ddd => aaaBbbCccDdd => AaaBbbCccDdd
 * @param str
 */
export function pascalCase(str) {
    const camel = camelCase(str);
    const first = camel.charAt(0).toUpperCase();
    const _rest = camel.slice(1);
    return first + _rest;
}
export default pascalCase;
