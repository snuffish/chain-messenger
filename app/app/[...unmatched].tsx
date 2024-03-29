import { Link, Stack } from 'expo-router'
import React from 'react'
import { YStack } from 'tamagui'
import { Container, Main, Subtitle, Title } from '~/tamagui.config'



export default function NotFoundScreen() {
  return (
    <Container>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Main>
        <YStack>
          <Title>Not found!</Title>
          <Link href="/messages">
            <Subtitle>Go to home!</Subtitle>
          </Link>
        </YStack>
      </Main>
    </Container>
  )
}
