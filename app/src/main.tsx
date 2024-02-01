import '@walletconnect/react-native-compat';

import React from 'react';
import { Web3Modal } from '@web3modal/wagmi-react-native';

import { registerRootComponent } from "expo";
import { StatusBar } from 'expo-status-bar';

import App from './App';
import Provider from "./Provider";

const Main = (): any => {
    return (
        <Provider>
            <StatusBar style="auto" />
            <App />
            <Web3Modal />
        </Provider>
    )
}

registerRootComponent(Main)
