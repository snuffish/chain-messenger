import { TamaguiProvider, Theme } from 'tamagui'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { PropsWithChildren } from 'react'
import { WagmiProvider } from 'wagmi'
import tamaguiConfig from '../../tamagui.config'
import { config } from '../config'
import { AuthProvider } from './AuthContext'

export const ContextProvider = ({ children }: PropsWithChildren) => {
    const queryClient = new QueryClient()

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <TamaguiProvider config={tamaguiConfig}>
                    <AuthProvider>
                        <Theme name="darkTheme">
                            {children}
                        </Theme>
                    </AuthProvider>
                </TamaguiProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}
