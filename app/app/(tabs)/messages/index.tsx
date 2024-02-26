import { Link } from 'expo-router'
import React from 'react'
import { Avatar, Text, View } from 'tamagui'

type UserRowTypes = {
    username: string
}
const UserRow = ({ username }: UserRowTypes) => {
    return (
        <Link href={'/(tabs)/messages/1'}>
            <Avatar circular size='$5'>
                <Avatar.Image accessibilityLabel='dsdsdsd' src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Vomit&skinColor=Light" />
            </Avatar>
        </Link>
    )
}

export default function () {
    return (
        <View>
            <UserRow username='Snuffish' />
        </View>
    )
}
