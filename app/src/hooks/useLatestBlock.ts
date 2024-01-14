import { useEffect, useState } from "react"
import { deserialize } from "wagmi"
import { watchBlockNumber } from "wagmi/actions"
import { config } from "../wagmi"

const useLatestBlock = () => {
    const [block, setBlock] = useState(0)

    useEffect(() => {
        return watchBlockNumber(config, {
            onBlockNumber(blockNumber) {
                setBlock(deserialize(blockNumber.toString()))
            }
        })
    }, [])

    return block
}

export default useLatestBlock
