/**
 * aes加密函数
 * 秘钥256位, iv:16位 , mode:CBC , padding:PKCS5Padding  (PKCS5Padding的补码方式，其实就是PKCS7)
 * @param {string} data 加密的字符串
 * @param {string} keyStr 秘钥 192位// 后续自动生成
 * @param {string} ivStr 初始向量 16位
 * @return {string} 加密后的数据 base64
 * **/
declare function aesEncrypt(data: string, keyStr: string, ivStr: string): string;
declare function aesDecrypt(data: string, keyStr: string, ivStr: string): string;
declare const _default: {
    aesEncrypt: typeof aesEncrypt;
    aesDecrypt: typeof aesDecrypt;
};
export default _default;
