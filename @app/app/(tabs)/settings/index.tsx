import { Button, SizeTokens, Spacer, View, YStack, createStyledContext, styled } from 'tamagui'

const Settings = (): any => {
  return (
    <View>
      <YStack marginHorizontal="$5" marginTop="$2.5">
        <Button>Profil</Button>
        <Spacer />
        <Button>Övrigt</Button>
      </YStack>
    </View>
  )
}

export default Settings
