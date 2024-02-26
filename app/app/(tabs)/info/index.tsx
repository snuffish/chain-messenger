import React from 'react'
import { Button, Text } from 'tamagui'
import { useAuth } from '~/app/context/AuthContext'

export default function Info() {
    const auth = useAuth()

    return (
        <>
            <Text>Address: {auth.address}</Text>
            <Text>Status: {auth.status}</Text>
            <Button onPress={() => auth.setAddress('0x12033A3E60fc4c1453b0538F62405484371d4405')}>CLICK ME</Button>
        </>
    )
}
