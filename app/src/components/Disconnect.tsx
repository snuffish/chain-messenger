import { Button } from '@chakra-ui/react';
import React from 'react';
import { useAccount, useConnect, useDisconnect } from "wagmi";

const Disconnect = () => {
    const { isConnected, status } = useAccount()
    const { disconnect } = useDisconnect()

    if (!isConnected) {
        return
    }

    return (
        <div>
            <Button colorScheme='gray' onClick={() => disconnect()}>
                disconnect
            </Button>
        </div >
    )
}

export default Disconnect
