import { TamaguiProvider, Theme } from 'tamagui'

import tamaguiConfig from '../tamagui.config'

const Provider = ({ children }: any) => {
  return (
    // <WagmiProvider config={config}>
    //   <QueryClientProvider client={queryClient}>
    <TamaguiProvider config={tamaguiConfig}>
      <Theme name="darkTheme">{children}</Theme>
    </TamaguiProvider>
    //     </QueryClientProvider>
    //   </WagmiProvider>
  )
}

export default Provider
