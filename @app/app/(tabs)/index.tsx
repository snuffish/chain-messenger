import React from 'react'
import { Avatar, Text, View } from 'tamagui'

type UserRowTypes = {
  username: string
}
const UserRow = ({ username }: UserRowTypes) => {
  return (
    <Avatar circular size='$5'>
      <Avatar.Image accessibilityLabel='dsdsdsd' src="https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Round&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerSweater&eyeType=WinkWacky&eyebrowType=UpDown&mouthType=Vomit&skinColor=Light" />
    </Avatar>
  )
}

const Messages = () => {
  return (
    <View>
      <UserRow username='Snuffish' />
    </View>
  )
}

export default Messages
