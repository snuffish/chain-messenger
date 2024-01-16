import React from 'react';
import { useAccount, useConnect, useDisconnect } from "wagmi";

const Disconnect = () => {
    const { isConnected, status } = useAccount()
    const { disconnect } = useDisconnect()!

    if (!isConnected) {
        return
    }

    return (
        <div>
            <button type="button" onClick={() => disconnect()}>
                disconnect
            </button>
        </div >
    )
}

export default Disconnect
