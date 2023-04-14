/**
 * rsa加密
 * @param data 明文
 * @param pubKey 公钥
 * @param algName
 * @return  base64格式
 * */
declare function rsaEncrypt(data: string, pubKey: string, algName?: string): any;
/**
 * rsa解密
 * @param data 密文 base64
 * @param privKey 私钥
 * @param algName
 * @return  明文
 * */
declare function rsaDecrypt(data: string, privKey: string, algName?: string): any;
/**
 * rsa 签名
 * @param data 明文
 * @param privKey 私钥
 * @return  密文 base64
 * */
declare function rsaSign(data: string, privKey: string): any;
/**
 * rsa 验签
 * @param data 明文
 * @param signStr 密文
 * @param pubKey 公钥
 * @return  true/false
 * */
declare function rsaVerify(data: string, signStr: string, pubKey: string): boolean;
declare const _default: {
    rsaEncrypt: typeof rsaEncrypt;
    rsaDecrypt: typeof rsaDecrypt;
    rsaSign: typeof rsaSign;
    rsaVerify: typeof rsaVerify;
};
export default _default;
