import '@tamagui/core/reset.css';
import { registerRootComponent } from 'expo';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { TamaguiProvider, Text, Theme } from 'tamagui';
import App from './App';
import tamaguiConfig from '../tamagui.config';

const Main = () => {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  })

  useEffect(() => {
    if (loaded) { }
  }, [loaded])

  if (!loaded) return null

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name='Input'>
        <App />
      </Theme>
    </TamaguiProvider>
  )
}

registerRootComponent(Main)
