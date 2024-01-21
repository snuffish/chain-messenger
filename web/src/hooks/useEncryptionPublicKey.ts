import { useMetamask } from 'use-metamask';
import { useMutation, useQuery } from "@tanstack/react-query"
import { useConnectorClient } from "wagmi"
import { ethereumRequest } from "../utils/crypt"
import { Address, zeroAddress } from "viem"

const useEncryptionPublicKey = () => {
    const { data: client, isSuccess } = useConnectorClient()
    const address = isSuccess ? client.account.address : zeroAddress

    return useQuery({
        queryFn: () => isSuccess ? ethereumRequest('eth_getEncryptionPublicKey', [address]) : null,
        queryKey: [],
        enabled: false
    })
}

export default useEncryptionPublicKey
