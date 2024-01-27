import '@walletconnect/react-native-compat';

import React from 'react';
import {
    Web3Modal,
    createWeb3Modal,
    defaultWagmiConfig
} from '@web3modal/wagmi-react-native';
import { registerRootComponent } from "expo";
import { WagmiConfig } from 'wagmi';
import { arbitrum, mainnet, polygon, polygonMumbai } from 'wagmi/chains';
import { StatusBar } from 'expo-status-bar';
import HomePage from './pages/HomePage';
import App from './App';
import { Text, View } from 'react-native';
import { defineChain } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
};


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
            http: ['https://891a-2a00-1598-25c0-8400-301c-6eaa-69d3-fe7b.ngrok-free.app/']
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

const Main = (): any => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <QueryClientProvider client={queryClient}>
                <StatusBar style="auto" />
                <App />
                <Web3Modal />
            </QueryClientProvider>
        </WagmiConfig>
    )
}



registerRootComponent(Main)
