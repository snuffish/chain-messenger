import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "tamagui";

export default function () {
    return (
        <View>
            <Text>SUB PAGE</Text>
            <Link href='..'>
                <Button>ID PAGE 2</Button>
            </Link>
        </View>
    )
}
