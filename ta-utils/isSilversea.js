/**
 * 判断是否是银海浏览器
 * @returns {string|boolean}
 */
export default function isSilversea() {
    let ua = navigator.userAgent;
    let index = ua.lastIndexOf("DeepBlue");
    // @ts-ignore
    let version = ua.match(/Silversea/i) == "Silversea" || ua.match(/DeepBlue/i) == "DeepBlue";
    if (index >= 0) {
        version = ua.substr(index + 9);
    }
    return version;
}
export { isSilversea };
