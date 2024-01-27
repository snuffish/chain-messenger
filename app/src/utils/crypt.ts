// import { EtherSymbol, Wallet } from 'ethers';
// import { HmacSHA256, enc } from 'crypto-js';
// import * as sigUtil from "@metamask/eth-sig-util";
// import * as ethUtil from 'ethereumjs-util'

// export const ethereumRequest = (method: string, params: any[]) => {
//     // @ts-ignore
//     return window.ethereum.request({ method, params })
// }

// // https://github.com/MetaMask/eth-sig-util/blob/v4.0.0/src/encryption.ts#L40
// export const ethEncrypt = (publicKey: string, text: string) => {
//     const result = sigUtil.encrypt({
//         publicKey,
//         data: text,
//         version: 'x25519-xsalsa20-poly1305'
//     });

//     return ethUtil.bufferToHex(Buffer.from(JSON.stringify(result), 'utf8'))
// }

// export const ethDecrypt = (publicKey: string, hash: string) => {
//     return ethereumRequest('eth_decrypt', [hash, publicKey])
// }

// export const encryptInternalData = (wallet: Wallet, data: string) => {
//     const encrypted = HmacSHA256(data, wallet.privateKey)
//     const encHash = encrypted.toString(enc.Hex)

//     return encHash
// }