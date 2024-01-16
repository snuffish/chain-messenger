
import { Wallet } from 'ethers'
import React from 'react'
import { createPublicClient, http } from 'viem'
import { useAccount, useBlockTransactionCount } from 'wagmi'
import Connect from './components/Connect'
import Disconnect from './components/Disconnect'
import useBalance from './hooks/useBalance'
import useLatestBlock from './hooks/useLatestBlock'
import { dev } from './wagmi'

// import { parseEther } from 'viem'

export const Client = createPublicClient({
  chain: dev,
  transport: http()
})

function App() {
  const account = useAccount()
  const txCount = useBlockTransactionCount()
  const balance = useBalance(account.address)
  const { block, isLoading } = useLatestBlock()

  const wallet = new Wallet('1f7cb0d34ce76439161e7e113204cc2af226ce4efae51052a1bc042187a7520e')

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          status: {account.status}
          <br />
          addresses: {account.address}
          <br />
          balance: {balance.toString()}
          <br />
          BlockNr: {isLoading ? '...' : block}
          <br />
          txCount: {txCount.data}
        </div>
      </div >

      <Connect />
      <Disconnect />
    </>
  )
}

export default App
