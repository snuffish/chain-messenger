import { RecoverMessageAddressParameters, VerifyMessageParameters, recoverMessageAddress, verifyMessage } from 'viem';

export async function getSigner(signerNr: number = 0) {
    // @ts-ignore
    const signers = await ethers.getSigners()
    const signer = signers[signerNr]

    return signer
}

export const recoverSignMessageSender = async (args: RecoverMessageAddressParameters) => {
    return await recoverMessageAddress(args)
}

export const verifySignMessage = async (args: VerifyMessageParameters) => {
    return await verifyMessage(args)
}

