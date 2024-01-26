import * as crypto from 'crypto'
import { Wallet } from 'ethers';
import { encryptInternalData } from '../web/src/utils/crypt';


describe('Encryption', () => {
    const wallet = new Wallet('1f7cb0d34ce76439161e7e113204cc2af226ce4efae51052a1bc042187a7520e')

    // it will encrypt your internal RSA Private key
    it('Encrypt an message with userA'), async () => {
        // @ts-ignore
        encryptInternalData(wallet, wallet.privateKey)

    }

    // Decrypt your internal RSA Private key 
})
