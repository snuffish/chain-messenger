import { W3mButton } from '@web3modal/wagmi-react-native';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAccount, useBalance, useBlockNumber } from 'wagmi';

export default function App() {
  const { data: blockNumber } = useBlockNumber({ watch: true })
  const { address, isConnected, status } = useAccount()
  // const { data: balance } = useBalance({ address, formatUnits: 'ether', watch: true });

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <W3mButton />
      </View>

      {isConnected && (
        <View style={styles.block}>
          <Text>Block: {String(blockNumber ?? 0)}</Text>
          <Text>Address: {address}</Text>
          {/* <Text>Balance: {balance?.formatted}</Text> */}
          <Button title='KEY' onPress={() => {
            // @ts-ignore
            // const [address] = window.ethereum.request({
            //   method: 'eth_requestAccounts'
            // }) 

            // client.request({
            //   method: 'eth_getEncryptionPublicKey',
            //   params: [address]

            // }).then(res => console.log("RES => ", res)).catch(err => console.log("ERR => ", err))


            // const enc = ethereumRequest('eth_getEncryptionPublicKey', [address])
            // console.log("ENC => ", enc)
          }} />
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
});