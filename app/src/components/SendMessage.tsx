import { useEffect, useState } from "react"
import { Button, Form, Input, Spinner, Text, TextArea, YStack } from "tamagui"

const SendMessage = () => {
    const [status, setStatus] = useState<'off' | 'submitting' | 'done'>('off')

    useEffect(() => {
        const timer = setTimeout(() => setStatus('done'), 2000)
        return () => {
          clearTimeout(timer)
        }
    }, [status])

    return (
        <>
            <Form
                onSubmit={() => setStatus('submitting')}
                padding='$8'>
                <YStack space={5}>
                    <Input
                        placeholder='Send to address'
                    />
                    <TextArea
                        placeholder='Type a message...'
                    />

                    <Form.Trigger asChild>
                        <Button
                            icon={status === 'submitting' ? <Spinner/> : undefined}
                            backgroundColor='$blue8'>
                            Send
                        </Button>
                    </Form.Trigger>
                    <Text color='red'>Status: {status}</Text>
                </YStack>
            </Form>
        </>
    )
}

export default SendMessage
