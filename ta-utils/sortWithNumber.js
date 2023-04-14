/**
 * 按数字排序
 * @deprecated
 * @param a 一行数据
 * @param b 玲一行数据
 * @param c 升序或降序
 * @param d 当前列的dataIndex
 * @return {number}
 * @author jianglw
 */
export function sortWithNumber(a, b, c, d) {
    if (!a[d]) {
        return !b[d] ? 0 : 1;
    }
    return a[d] - b[d];
}
export default sortWithNumber;
