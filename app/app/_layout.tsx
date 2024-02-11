import { useFonts } from 'expo-font'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'

import Provider from './Provider'
import React from 'react'

export default function Layout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf')
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) return null

  const TabsStack = (
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false
      }}
    />
  )

  return (
    <Provider>
      <Stack>{TabsStack}</Stack>
    </Provider>
  )
}
