import { createClient, defineChain } from 'viem'
import { mainnet } from 'viem/chains'
import { createConfig, createStorage, http } from 'wagmi'
import { coinbaseWallet, injected, metaMask } from 'wagmi/connectors'

export const dev = defineChain({
  name: 'Dev',
  id: 31337,
  nativeCurrency: {
    name: 'Ethereum',
    symbol: 'GO',
    decimals: 18
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545/'],
    }
  }
})

export const config = createConfig({
  chains: [dev],
  client: ({ chain }) => {
    return createClient({ chain, transport: http() })
  },
  // transports: {
  //   [dev.id]: http()
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
