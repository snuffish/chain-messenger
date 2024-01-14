import { createClient, defineChain } from 'viem'
import { mainnet } from 'viem/chains'
import { createConfig, createStorage, http } from 'wagmi'
import { coinbaseWallet, injected, metaMask } from 'wagmi/connectors'

const localhost = defineChain({
  id: 31337,
  name: 'Dev',
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545/'],
    }
  }
})

export const config = createConfig({
  chains: [localhost],
  client: ({ chain }) => {
    return createClient({ chain, transport: http() })
  },
  // transports: {
  //   [localhost.id]: http()
  // },
  connectors: [
    injected({ target: 'metaMask' })
  ],
  multiInjectedProviderDiscovery: false,
  storage: createStorage({ storage: window.localStorage }),
})



declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
