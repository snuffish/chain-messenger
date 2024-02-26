import { ParamListBase, StackNavigationState } from "@react-navigation/native"
import { StackNavigationEventMap, StackNavigationOptions, createStackNavigator } from "@react-navigation/stack"
import { withLayoutContext } from "expo-router"
import React from "react"

type Props = {
    title: string
}
export const createLayout = ({ title }: Props) => {
    const { Navigator } = createStackNavigator()

    const LayoutContext = withLayoutContext<
        StackNavigationOptions,
        typeof Navigator,
        StackNavigationState<ParamListBase>,
        StackNavigationEventMap
    >(Navigator)

    const Screen = ({ isIndex, name, title }: React.PropsWithChildren<{
        isIndex?: boolean
        name?: string
        title: string
    }>) => {
        name = isIndex ? 'index' : name

        return LayoutContext.Screen({
            name,
            options: {
                title,
                headerTitle: title
            }
        })
    }

    const Layout = ({ children }: React.PropsWithChildren) => {
        return (
            <LayoutContext>
                <Screen isIndex title={title} />
                {children}
            </LayoutContext>
        )
    }

    return { Layout, Screen }
}
