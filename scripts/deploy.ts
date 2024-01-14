import { ethers } from "hardhat"
import { getSigner } from "./util"
import { Signer } from "ethers";

export const deployMessageNFT = async () => {
    const signer = await getSigner()

    const messagtNFTFactory = await ethers.getContractFactory('MessageNFT', signer);

    const messageNFT = await messagtNFTFactory.deploy('PoolName');

    return messageNFT
}

export const deployPool = async (args: any) => {
    const signer = await getSigner()

    const poolFactory = await ethers.getContractFactory('MessagePool')
    const pool = await poolFactory.deploy(args)

    return pool
}

// export async function deployProduction(token: string, owner: Signer) {
//     const vaultFactory = await ethers.getContractFactory("Vault", owner);

//     return vaultFactory.deploy(token);
// }

// export async function deployTesting(owner: Signer) {
//     const erc20Factory = await ethers.getContractFactory("MockERC20", owner);

//     const erc20 = await erc20Factory.deploy("Mock ERC20 Token", "MOCK", 18);

//     const vaultFactory = await ethers.getContractFactory("Vault", owner);

//     const vault = await vaultFactory.deploy(erc20);

//     return { erc20, vault };
// }

// // const run = async () => {
// //     await deployTesting(await getSigner(0))
// //     await deployMessageNFT()
// // }

// // run()

