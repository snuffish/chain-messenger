import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { useAccount, useBalance, useBlockNumber } from "wagmi";
import useHash from "../hooks/useHash";

const AccountPage = () => {
    const { data: blockNumber } = useBlockNumber({ watch: true })
    const { address } = useAccount()
    const { data: balance } = useBalance({ address, formatUnits: 'ether', watch: true });

    const { data, success } = useHash({ value: 'BAJSKUK' })

    return (
        <View style={styles.block}>
            <Text>SUCCESS: {success}</Text>
            <Text>DATA: {data}</Text>
            <Text>Block: {String(blockNumber ?? 0)}</Text>
            <Text>Address: {address}</Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Balance:</Text>
                <Text>{balance?.formatted}</Text>
            </Text>
            {/* <Text style={{ fontWeight: 'bold' }}>Hash ({algo}):</Text>
            <Text>{hash}</Text>
            <Text style={{ fontWeight: 'bold' }}>ZeroX Hash ({algo}):</Text>
            <Text>{zx}</Text> */}
        </View>
    )
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


export default AccountPage