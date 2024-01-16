import { Wallet } from 'ethers';
import { HmacSHA256, enc } from 'crypto-js';

export const encryptInternalData = (wallet: Wallet, data: string) => {
    const encrypted = HmacSHA256(wallet.address, wallet.privateKey)
    const encHash = encrypted.toString(enc.Hex)

    return encHash
}

// export const internalDecryptDawta = (wallet: Wallet, hash: string) => {
//     const internalHash = internalEncryptData(wallet, hash);
//     console.log("EEEE+++)", HmacSHA256({}))
// }