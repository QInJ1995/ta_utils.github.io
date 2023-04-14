import { KEYUTIL, KJUR, hextob64, b64tohex, b64toutf8 } from 'jsrsasign';
/**
 * rsa加密
 * @param data 明文
 * @param pubKey 公钥
 * @param algName
 * @return  base64格式
 * */
function rsaEncrypt(data, pubKey, algName) {
    try {
        pubKey = b64toutf8(pubKey);
        let pub = KEYUTIL.getKey(pubKey);
        const setAlgName = algName !== null && algName !== void 0 ? algName : "RSAOAEP";
        let enc = KJUR.crypto.Cipher.encrypt(data, pub, setAlgName);
        return hextob64(enc);
    }
    catch (e) {
        return false;
    }
}
/**
 * rsa解密
 * @param data 密文 base64
 * @param privKey 私钥
 * @param algName
 * @return  明文
 * */
function rsaDecrypt(data, privKey, algName) {
    try {
        privKey = b64toutf8(privKey);
        let value = b64tohex(data);
        let prv = KEYUTIL.getKey(privKey);
        const setAlgName = algName !== null && algName !== void 0 ? algName : "RSAOAEP";
        let dec = KJUR.crypto.Cipher.decrypt(value, prv, setAlgName);
        return dec;
    }
    catch (e) {
        return false;
    }
}
/**
 * rsa 签名
 * @param data 明文
 * @param privKey 私钥
 * @return  密文 base64
 * */
function rsaSign(data, privKey) {
    try {
        privKey = b64toutf8(privKey);
        let signature = new KJUR.crypto.Signature({ alg: "SHA1withRSA", prvkeypem: privKey });
        signature.updateString(data);
        // 签名返回hex
        let a = signature.sign();
        let sign = hextob64(a);
        return sign;
    }
    catch (e) {
        return false;
    }
}
/**
 * rsa 验签
 * @param data 明文
 * @param signStr 密文
 * @param pubKey 公钥
 * @return  true/false
 * */
function rsaVerify(data, signStr, pubKey) {
    try {
        pubKey = b64toutf8(pubKey);
        let signatureVf = new KJUR.crypto.Signature({ alg: "SHA1withRSA", prvkeypem: pubKey });
        signatureVf.updateString(data); //需要先对data编码
        // 验签入参是16进制字符串，注意转码
        return signatureVf.verify(b64tohex(signStr));
    }
    catch (e) {
        return false; // 出错和验签失败都是false
    }
}
function rsatest() {
    let pk1 = "LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUlHZk1BMEdDU3FHU0liM0RRRUJBUVVBQTRHTkFEQ0JpUUtCZ1FDSkprUERyV2pRUG1JTnhMZzJpeWtYZU82RwpYTk8wNXZyMjdkcExUeW9KWWgrYjQxQVVLWXprVk5tZ0pTV2lHaktvQVc1cnVMdCtGaC9sNy9RanZmR2Z2OVY3CkZ1STREU0pCSzdQZHI0alQ1aGNhb1hHYkdiUDlGL1dneUdMMGYxV05sbnpSOUEzNTRuSlo3Nms3aHpvMHYwbjgKZzRockxJOWMrTGZTWmNNc1JRSURBUUFCCi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLQo=";
    let prv1 = "LS0tLS1CRUdJTiBQUklWQVRFIEtFWS0tLS0tCk1JSUNkZ0lCQURBTkJna3Foa2lHOXcwQkFRRUZBQVNDQW1Bd2dnSmNBZ0VBQW9HQkFJa21ROE90YU5BK1lnM0UKdURhTEtSZDQ3b1pjMDdUbSt2YnQya3RQS2dsaUg1dmpVQlFwak9SVTJhQWxKYUlhTXFnQmJtdTR1MzRXSCtYdgo5Q085OForLzFYc1c0amdOSWtFcnM5MnZpTlBtRnhxaGNac1pzLzBYOWFESVl2Ui9WWTJXZk5IMERmbmljbG52CnFUdUhPalMvU2Z5RGlHc3NqMXo0dDlKbHd5eEZBZ01CQUFFQ2dZQlA2R09ERnY0Q2x0WTZmMnQxSEErTkJZQ3oKK0ZIQkRQTWIrK2s4QjV2T2E4Vk81bG81NVJ1WnpYWWV3SVgwdEo3ZkZEWnB2UEJBdmxOSGZVOFpwQW1xelJTKwpTdzFPT2hxdUFaTmhWMmRycDhxcW8wc0tDUytqSlRCUHBtUVdBTFdYS3dKT29JRWhGdjg0anFHb3VGRHZtRjRvClhCNXV1M3NpZHkxdTA3bXM0UUpCQVA5Q3dhNWRGMndJVlpneXNxZWI4R0g0RUc2d1JvSHBCUHE5cm5jWmhSNnUKekE4dWNpREdYMVA3SzZmRHNDREx0NndBbXM0TjgzM0tLNCt6Q2F1dVdyTUNRUUNKaS9HUXhwdDFIVXhwbXpjVQpoa093WWFOa3dqVGR4bjBMQTFvT2JyeFB5VEREZVlvZjMwWGRyckl2REh6bnljYW5ZMVlPQ2JVaXQzbm94eXU2CnVMa25Ba0VBL2FMM2tLb3ZlOGxNUTg4Y2RpOGN6RHdSRit0UUpBWEdUTi90VzZxZis3ejBScUdBQmRFWEovdUwKaFVlTTJ3bVJsL2VCMnYxQjFOdnVMUHRad0oyZXdRSkFZaWcxVnJ6MUdjbXp5eldTUkJwZzJkR0QyaGJoeFZhdAp5NXN6dkZMNEhmUVUwWnE5b0dza244UFlzc3kxb25BVFRVY05sVzBHRCtWaG9XWHBaaElIUndKQUI5amFucFdXCk4ySTlYS3lWQlNQajYvWlpKcVZvcjMwVXpiVTZZYm1pOEhiS1FZdktLaEF3N0Z1MW80Zmh3cVAwUEdnNlJtZkoKdDc1bzdHMUtiMnlTVlE9PQotLS0tLUVORCBQUklWQVRFIEtFWS0tLS0tCg==";
    console.log("rsa加密解密,", rsaEncrypt("%E9%93%B6%E6%B5%B7", pk1), rsaDecrypt(rsaEncrypt("%E9%93%B6%E6%B5%B7", pk1), prv1));
    console.log("rsa签名:rsaVerify('银海',prv)", rsaVerify('%E9%93%B6%E6%B5%B7', rsaSign("%E9%93%B6%E6%B5%B7", prv1), pk1));
}
// rsatest()
export default {
    rsaEncrypt,
    rsaDecrypt,
    rsaSign,
    rsaVerify
};
