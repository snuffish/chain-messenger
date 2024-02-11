import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "tamagui";

export default function () {
    return (
        <View>
            <Text>INDEX</Text>
            <Link href='/(tabs)/messages/test'>
                <Button>CLICK ME</Button>
            </Link>
            <Link href='/(tabs)/messages/1'>
                <Button>ID PAGE 1</Button>
            </Link>
            <Link href='/(tabs)/messages/2'>
                <Button>ID PAGE 2</Button>
            </Link>
            <Link href='/(tabs)/messages/sub'>
                <Button>SUB PAGE</Button>
            </Link>
            <Link href='/(tabs)/messages/sub/subTest'>
                <Button>SUB333 PAGE</Button>
            </Link>
        </View >
    )
}
