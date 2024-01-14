import { task } from "hardhat/config";
import { getSigner } from "../scripts/util";
import { ethers } from "ethers";

task('faucet', 'Sends ETH and tokens to an address')
    .addPositionalParam("receiver", "The address that will receive them")
    .setAction(async ({ receiver }) => {
        const signer = await getSigner()

        const tx = await signer.sendTransaction({
            to: receiver,
            value: ethers.WeiPerEther
        });
        await tx.wait();

        console.log(`Transferred ${ethers.WeiPerEther} wei to ${receiver}`);
    })
