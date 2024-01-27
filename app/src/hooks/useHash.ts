import { Hex, keccak256, sha256, stringToBytes } from "viem"
import { useQuery } from "wagmi"

type HashTypes = 'keccak256' | 'sha256'
type Props = {
    value: string
    type?: HashTypes
}

const removeZxPrefix = (value: Hex) => value.slice(0, 2) === '0x' ? value.slice(2) : value

const useHash = ({ value, type = 'keccak256' }: Props) => {
    const { data, isSuccess } = useQuery([], {
        queryFn: () => keccak256(stringToBytes(value)),
    })

    // if (type === 'keccak256') {
    //     hash = keccak256(stringToBytes(value))
    // }

    // if (type === 'sha256') {
    //     hash = sha256(stringToBytes(value))
    // }

    return {
        success: isSuccess,
        data: data
        // algo: type,
        // zx: data,
        // hash: removeZxPrefix(data)
    }
}

export default useHash
