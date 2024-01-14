import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { Address, zeroAddress } from "viem"
import { getBalance } from "wagmi/actions"
import { config } from "../wagmi"
import useLatestBlock from "./useLatestBlock"

const useBalance = (address: Address | undefined) => {
    const [balance, setBalance] = useState('')
    const latestBlock = useLatestBlock()

    useEffect(() => {
        getBalance(config, {
            address: address ?? zeroAddress
        }).then(data => setBalance(ethers.formatEther(data.value)))
    }, [latestBlock])

    return balance
}

export default useBalance
