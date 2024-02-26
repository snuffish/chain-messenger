import React, { useState } from 'react'
import { Address, zeroAddress } from 'viem'
import { useAccount } from 'wagmi'

type AuthContextProps = {
    address: Address
    setAddress: Function
    status: string
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined)
AuthContext.displayName = 'AuthContext'

export const useAuth = () => {
    const context = React.useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
    const [address, setAddress] = useState<Address>(zeroAddress)
    const { status } = useAccount()

    return (
        <AuthContext.Provider value={{ address, setAddress, status }}>
            {children}
        </AuthContext.Provider>
    )
}
