import React from "react"
import {
    createWeb3Modal,
    defaultWagmiConfig
} from '@web3modal/wagmi-react-native';
import { defineChain } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TamaguiProvider, createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v2'
import { WagmiConfig } from "wagmi";

const projectId = process.env.EXPO_PUBLIC_WALLETCONNECT_CLOUD_PROJECT_ID;

// Metadata to show about the dApp when deep-linking to the wallet
const metadata = {
    name: 'Example dApp',
    description: 'Modern dApp example from Callstack',
    url: 'https://callstack.com/',
    icons: ['https://avatars.githubusercontent.com/u/42239399'],
    redirect: {
        native: 'YOUR_APP_SCHEME://',
        universal: 'YOUR_APP_UNIVERSAL_LINK.com',
    },
}

const localhost = defineChain({
    id: 31337,
    name: 'localhost',
    nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 8
    },
    network: 'localhost',
    rpcUrls: {
        default: {
            http: ['http://127.0.0.1:8545/']
        },
        public: {
            http: ['https://chain.messenger.ngrok.dev/']
        }
    }
})

// Chains that will be supported by the dApp
const chains = [localhost];

// Create wagmi config
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

// Create actual Web3Modal instance
createWeb3Modal({
    projectId,
    chains,
    wagmiConfig,
});

const queryClient = new QueryClient()

const tamaguiConfig = createTamagui(config)

type Conf = typeof tamaguiConfig
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf { }
}

const Provider = ({ children }): React.ReactNode => {
    return (
        <TamaguiProvider config={tamaguiConfig}>
            <WagmiConfig config={wagmiConfig}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </WagmiConfig>
        </TamaguiProvider>
    )
}

export default Provider