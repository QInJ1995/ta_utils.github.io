/**
 * rsa 签名
 * @param data 明文
 * @return  密文 hex
 * */
declare function md5Sign(data: string): string | boolean;
declare const _default: {
    md5Sign: typeof md5Sign;
};
export default _default;
