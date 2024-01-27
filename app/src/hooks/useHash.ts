import { Hex, keccak256, sha256, stringToBytes } from "viem"

type HashTypes = 'keccak256' | 'sha256'
type Props = {
    value: string
    type?: HashTypes
}

const removeZxPrefix = (value: Hex) => value.slice(0, 2) === '0x' ? value.slice(2) : value

const useHash = ({ value, type = 'keccak256' }: Props) => {
    let hash: Hex

    if (type === 'keccak256') {
        hash = keccak256(stringToBytes(value))
    }

    if (type === 'sha256') {
        hash = sha256(stringToBytes(value))
    }

    return {
        algo: type,
        zx: hash,
        hash: removeZxPrefix(hash)
    }
}

export default useHash
