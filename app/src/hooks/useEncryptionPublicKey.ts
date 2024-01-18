import { useQuery } from "@tanstack/react-query"
import { useConnectorClient } from "wagmi"
import { ethereumRequest } from "../utils/crypt"
import { Address } from "viem"

const useEncryptionPublicKey = (address: string) => {
    let { data: encryptionPublicKey, refetch, fetchStatus, isFetched } = useQuery({
        queryFn: () => ethereumRequest('eth_getEncryptionPublicKey', [address]),
        queryKey: [],
        enabled: false
    })

    return { encryptionPublicKey, fetch: refetch, fetchStatus, isFetched }
}

export default useEncryptionPublicKey
