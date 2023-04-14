import { DescOrAsc } from './descOrAsc';
/**
 * 按拼音/字母排序
 * @param data
 * @param option
 */
export declare function sortWithCharacter(data: Array<string | number>, option?: {
    locale?: 'zh' | 'en';
    rule?: DescOrAsc;
}): (string | number)[];
export default sortWithCharacter;
