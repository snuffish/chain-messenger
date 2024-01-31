import { Send } from "@tamagui/lucide-icons"
import React from "react"
import { Button, Input, Label, Switch, Text, TextArea, XStack, YStack } from "tamagui"

const SendMessagePage = () => {
    return (
        <YStack padding="$3" minWidth={300} gap="$4">
            <XStack alignItems="center" gap="$4">
                <Label width={90} htmlFor="address">
                    Address
                </Label>
                <Input flex={1} id="address" placeholder='0x01...32e9b0' />
            </XStack>

            <TextArea id='message' placeholder='Type a message here...' />

            <Button icon={<Send size='$1.5' />}>
                Send
            </Button>
        </YStack>
    )
}

export default SendMessagePage
