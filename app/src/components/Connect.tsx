import React from 'react';
import { useConnect } from "wagmi"

const Connect = () => {
    const { connect, connectors, isSuccess, isError, error } = useConnect()

    if (isSuccess) {
        return
    }

    return (
        <div>
            <h2>Connect</h2>
            {connectors.map((connector: any) => (
                <button
                    key={connector.uid}
                    onClick={() => connect({ connector })}
                    type="button"
                >
                    {connector.name}
                </button>
            ))}
            <div>{status}</div>
            <div>{error && isError}</div>
        </div >
    )
}

export default Connect
