import React from 'react';
import { W3mButton } from '@web3modal/wagmi-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useAccount, useBalance, useBlockNumber } from 'wagmi';
import useHash from './hooks/useHash';
import AccountPage from './pages/AccountPage';
import SendMessagePage from './pages/SendMessagePage';

export default function App() {
  const { isConnected } = useAccount()

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <W3mButton />
      </View>

      {isConnected && (<SendMessagePage />)}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  block: {
    marginTop: 32,
  },
})
