/**
 * 获取cookie
 * @param name
 */
export function getCookie(name) {
    let arr;
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    // eslint-disable-next-line prefer-const
    const isMatch = (arr = document.cookie.match(reg));
    if (isMatch) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return unescape(arr[2]);
    }
    else {
        return null;
    }
}
export default getCookie;
