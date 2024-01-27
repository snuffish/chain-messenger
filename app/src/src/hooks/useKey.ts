// const useEncryptionPublicKey = () => {
//     const { data: client, isSuccess } = useConnectorClient()
//     const address = isSuccess ? client.account.address : zeroAddress

//     return useQuery({
//         queryFn: () => isSuccess ? ethereumRequest('eth_getEncryptionPublicKey', [address]) : null,
//         queryKey: [],
//         enabled: false
//     })
// }