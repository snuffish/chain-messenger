import { Contract, Signer } from "ethers"
import { ethers } from "hardhat"
import { MessagePool } from "../typechain-types"
import { expect } from "chai"
import { verifySignMessage } from "../scripts/util"

type DeployProps = {
    contractName: string
    args?: any
}
async function deploy<T extends Contract>({
    contractName,
    args
}: DeployProps): Promise<[Contract, ...any[]]> {
    const [owner, userA, userB] = await ethers.getSigners();

    const tx = ethers.deployContract(contractName, args)
    const contract = await tx
    await contract.waitForDeployment()

    return [contract, owner, userA, userB];
}

let owner: Signer
let userA: Signer
let userB: Signer

const protocol: {
    pool?: Contract
} = {}

describe('MessagePool', () => {
    const poolName = 'Main pool'

    before(async () => {
        [owner, userA, userB] = await ethers.getSigners()
        console.log("userA Public =>", await userA.getAddress())
        console.log("userB Public =>", await userB.getAddress())
    })
    after

    it('Create the MessasgePool', async () => {
        const [contract] = await deploy({
            contractName: 'MessagePool',
            args: [poolName]
        })

        expect(contract).not.reverted
        protocol.pool = contract
    })

    it('Read the MessagePool name property', async () => {
        expect(await protocol.pool?._name.staticCall()).to.be.eq(poolName)
    })
})

describe('Messages', () => {
    let signHash
    let userA_contract

    it('userA Creates a signature hash', async () => {
        signHash = await userA.signMessage('TEST')

        const [contract] = await deploy({
            contractName: 'MessageNFT',
            args: [signHash]
        })

        userA_contract = contract
    })
})

// UserA Creates an NFT Message to UserB

// UserA puts the NFT into the Pool

// UserB listens for "NFT Message" Pool incoming events

// UserB decrypts the message and read in plaintext