import { AES } from "crypto-js";

/**
 * Encrypts a password using AES encryption algorithm.
 *
 * @param {string} password - The password to be encrypted.
 * @param {string} key - The encryption key. Defaults to VITE_CRYPTO_KEY.
 * @return {string} The encrypted password.
 */
export const encryptPassword = (
  password: string,
  key: string = import.meta.env.VITE_CRYPTO_KEY
): string => {
  return AES.encrypt(password.trim(), key).toString();
};
