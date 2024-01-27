import { createClient, defineChain } from 'viem';
import { createConfig, createStorage, http } from 'wagmi';
import { injected } from 'wagmi /connectors';

export const dev = defineChain({
  name: 'Dev',
  id: 1337,
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
