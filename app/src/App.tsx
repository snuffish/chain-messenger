import React from 'react';
import { W3mButton } from '@web3modal/wagmi-react-native';
import { StyleSheet, Text, View } from 'react-native';
import { useAccount, useBalance, useBlockNumber } from 'wagmi';

export default function App() {
  const { data: blockNumber } = useBlockNumber({ watch: true })
  const { address, isConnected, status } = useAccount()
  const { data: balance } = useBalance({ address, formatUnits: 'ether', watch: true });

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <W3mButton />
      </View>

      {isConnected && (
        <View style={styles.block}>
          <Text>Block: {String(blockNumber ?? 0)}</Text>
          <Text>Address: {address}</Text>
          <Text>Balance: {balance?.formatted}</Text>
        </View>
      )
      }
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
