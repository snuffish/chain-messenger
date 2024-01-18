import { Wallet } from 'ethers';
import { HmacSHA256, enc } from 'crypto-js';
import * as sigUtil from "@metamask/eth-sig-util";
import * as ethUtil from "ethereumjs-util";

export const encryptInternalData = (wallet: Wallet, data: string) => {
    const encrypted = HmacSHA256(wallet.address, wallet.privateKey)
    const encHash = encrypted.toString(enc.Hex)

    return encHash
}

const encrypt = (publicKey: string, text: string) => {
    const result = sigUtil.encrypt({
        publicKey,
        data: text,
        // https://github.com/MetaMask/eth-sig-util/blob/v4.0.0/src/encryption.ts#L40
        version: 'x25519-xsalsa20-poly1305'
    });
    
    // https://docs.metamask.io/guide/rpc-api.html#other-rpc-methods
    return ethUtil.bufferToHex(Buffer.from(JSON.stringify(result), 'utf8'))
}

// export const internalDecryptDawta = (wallet: Wallet, hash: string) => {
//     const internalHash = internalEncryptData(wallet, hash);
//     console.log("EEEE+++)", HmacSHA256({}))
// }
