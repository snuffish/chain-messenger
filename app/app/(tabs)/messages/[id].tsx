import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text } from "tamagui";

export default function () {
    const { id } = useLocalSearchParams()

    return (
        <Text>ID: {id}</Text>
    )
}
