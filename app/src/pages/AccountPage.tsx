import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { useAccount, useBalance, useBlockNumber } from "wagmi";
import useHash from "../hooks/useHash";
import useRPC from "../hooks/useRPC";
import { Button } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";

const AccountPage = () => {
    const { data: blockNumber } = useBlockNumber({ watch: true })
    const { address } = useAccount()
    const { data: balance } = useBalance({ address, formatUnits: 'ether', watch: true });

    const { algo, hash, zx } = useHash({ value: 'BAJSKUK' })

    const x = useRPC({
        method: 'get_balance',
        params: ['0xD0B7615f7CefbcF959cD5Ea58E3bC88C533c8d0b']
    })

    return (
        <View style={styles.block}>
            <Text>Block: {String(blockNumber ?? 0)}</Text>
            <Text>Address: {address}</Text>
            <Text>
                <Text style={{ fontWeight: 'bold' }}>Balance:</Text>
                <Text>{balance?.formatted}</Text>
            </Text>
            <Text style={{ fontWeight: 'bold' }}>Hash ({algo}):</Text>
            <Text>{hash}</Text>
            <Text style={{ fontWeight: 'bold' }}>ZeroX Hash ({algo}):</Text>
            <Text>{zx}</Text>
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