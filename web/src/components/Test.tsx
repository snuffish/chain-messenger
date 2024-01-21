import { Box, Button, Input, Stack, Text, Textarea, VStack } from "@chakra-ui/react"
import React, { useState } from "react"
import { isAddress } from "viem"
import useEncryptionPublicKey from "../hooks/useEncryptionPublicKey"
import { ethDecrypt, ethEncrypt } from "../utils/crypt"

const SendMessageForm = () => {
    const [encrypted, setEncrypted] = useState('')
    const [address, setAddress] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        console.log("IS ADDRESS=>>>", isAddress(address))

        const encrypted = ethEncrypt(address, message)
        setEncrypted(encrypted)
    }

    return (
        <VStack>
            <Text mb='8px'>Address</Text>
            <Input
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder='Recipients public address'
                size='sm'
            />
            <Text mb='8px'>Message</Text>
            <Textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Type a message here...'
                size='sm'
            />
            <Button
                colorScheme='teal'
                onClick={sendMessage}>Send</Button>
            {encrypted && (
                <Stack>
                    <Text as='b'>Encrypted hash</Text>
                    <Box width={1000}>{encrypted}</Box>
                </Stack>
            )}
        </VStack>
    )
}

const Test = () => {
    // const { data, isSuccess } = useConnectorClient()
    const { data: encryptionPublicKey, refetch, fetchStatus, isFetched } = useEncryptionPublicKey()

    return (
        <>
            <VStack>
                {fetchStatus === 'fetching' && (
                    <>
                        FETCHING...
                    </>
                )}
                {fetchStatus === 'idle' && isFetched && (
                    <>
                        Key: {encryptionPublicKey}
                    </>
                )}

                <Button onClick={() => refetch()}>Fetch Public Encryption Key</Button>
                <SendMessageForm />
                <Button onClick={async () => {
                    const decrypt = await ethDecrypt('0x0C9aA1ceC63Bb62C513Dd73B58aBb3257C1FD218', '0x7b2276657273696f6e223a227832353531392d7873616c736132302d706f6c7931333035222c226e6f6e6365223a22486136764949726f726353434e6a686c5a433869665a74464f384732746d7833222c22657068656d5075626c69634b6579223a224e62522f6d635878313131635376776e692f73666d354a4779536c4b6d33363762484278734d52634157383d222c2263697068657274657874223a2234705231764c76356a492f54446f4e4364384f51346f49584e354d567975546e46424f6a69495a2f33673d3d227d')

                    console.log("DSDSDS", decrypt)
                }}>Decrypt</Button>
            </VStack >
        </>
    )
}

export default Test
