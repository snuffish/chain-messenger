import { useQuery } from "@tanstack/react-query"
import { parseHexToString } from "../utils"
import { createPublicClient, http } from "viem"
import { localhost } from "viem/chains"

type Props = {
    method: string,
    params?: any[]
}

const useRPC = ({ method, params = [] }: Props) => {
    // const client = createPublicClient({
    //     chain: localhost,
    //     transport: http('https://a67f-193-181-34-151.ngrok-free.app')
    // })

    // client.getBlockNumber().then(res => console.log("RES => ", res)).catch(err => console.log("ERR => ", err))

    // const body = {
    //     "jsonrpc": "2.0",
    //     method,
    //     params
    // }
    // const body = { "jsonrpc": "2.0", "method": "eth_getBalance", "params": ["0xD0B7615f7CefbcF959cD5Ea58E3bC88C533c8d0b"], "id": 83 }

    // const { data, error, isError } = useQuery([], {
    //     queryFn: () => fetch('https://a67f-193-181-34-151.ngrok-free.app', {
    //         method: 'POST',
    //         body: JSON.stringify(body)
    //     })
    // })

    // console.log("DDDSSSSS=> ", data)

    // const res = parseHexToString('0x10', 0)
    // console.log("RES =>", res)

    return 0
}

export default useRPC
