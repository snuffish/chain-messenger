
import React from 'react'
import { useAccount, useBlockTransactionCount, useConnect, useDisconnect, useTransactionCount } from 'wagmi'
import useBalance from './hooks/useBalance'

function App() {
  const account = useAccount()
  const connect = useConnect()
  const { disconnect } = useDisconnect()
  const txCount = useBlockTransactionCount()
  const balance = useBalance(account.address)

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {account.address}
          <br />
          balance: {balance}
          <br />
          txCount: {txCount.data}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div >

      <div>
        <h2>Connect</h2>
        {connect.connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect.connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{connect.error?.message}</div>
      </div >
    </>
  )
}

export default App
