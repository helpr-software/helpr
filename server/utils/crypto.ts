import AES from "crypto-js/aes";
import enc from "crypto-js/enc-utf8";

export function encrypt(toEncrypt: string) {
  const secretKey = useRuntimeConfig().private.encryptionKey;
  return AES.encrypt(toEncrypt, secretKey).toString();
}

export function decrypt(toDecrypt: string) {
  const secretKey = useRuntimeConfig().private.encryptionKey;
  const bytes = AES.decrypt(toDecrypt, secretKey);
  return bytes.toString(enc);
}
