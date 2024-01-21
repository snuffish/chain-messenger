import { useEffect, useState } from "react"
import { deserialize } from "wagmi"
import { Client } from "../App"

const useLatestBlock = () => {
    const [block, setBlock] = useState(0)
    const isLoading = block == 0

    useEffect(() => {
        return Client.watchBlockNumber({
            onBlockNumber(blockNumber) {
                setBlock(deserialize(blockNumber.toString()))
            }
        })
    }, [])

    return { block, isLoading }
}

export default useLatestBlock
