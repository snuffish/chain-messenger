
import React from 'react'
import { createPublicClient, http } from 'viem'
import Connect from './components/Connect'
import { dev } from './wagmi'
import { useAccount, useConnect } from 'wagmi'
import Disconnect from './components/Disconnect'
import Test from './components/Test'
// import { parseEther } from 'viem'

export const Client = createPublicClient({
  chain: dev,
  transport: http()
})

function App() {
  const { isConnected } = useAccount()

  if (!isConnected) {
    return <Connect />
  }

  return (
    <>
      <Test />
      <Disconnect />
    </>
  )

  // const account = useAccount()
  // const txCount = useBlockTransactionCount()
  // const balance = useBalance(account.address)
  // const { block, isLoading } = useLatestBlock()

  // const wallet = new Wallet('1f7cb0d34ce76439161e7e113204cc2af226ce4efae51052a1bc042187a7520e')

  // return (
  //   <>
  //     <div>
  //       <h2>Account</h2>

  //       <div>
  //         status: {account.status}
  //         <br />
  //         addresses: {account.address}
  //         <br />
  //         balance: {balance.toString()}
  //         <br />
  //         BlockNr: {isLoading ? '...' : block}
  //         <br />
  //         txCount: {txCount.data}
  //       </div>
  //     </div >

  //     <Connect />
  //     <Disconnect />
  //   </>
  // )
}

export default App
