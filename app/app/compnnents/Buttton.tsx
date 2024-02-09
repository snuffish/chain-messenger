import { Button, SizeTokens, View, createStyledContext, styled } from 'tamagui'

export default function ({ children }: any) {
  const ButtonContext = createStyledContext({
    size: '$md' as SizeTokens
  })

  return styled(View, {
    name: 'Button',
    context: ButtonContext,
    backgroundColor: '$background',
    marginTop: '$3',
    children: [children]
  })
}
