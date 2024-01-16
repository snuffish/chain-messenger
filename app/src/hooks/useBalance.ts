import { useEffect, useState } from "react"
import { Address, zeroAddress } from "viem"
import { Client } from "../App"
import useLatestBlock from "./useLatestBlock"
import { ethers } from "ethers"

const useBalance = (address: Address = zeroAddress) => {
    const [balance, setBalance] = useState(0n)
    const latestBlock = useLatestBlock()

    useEffect(() => {
        const getBalance = async () => {
            const _balance = await Client.getBalance({ address: address })
            setBalance(_balance)
        }

        getBalance()
    }, [latestBlock])

    return ethers.formatEther(balance)
}

export default useBalance
