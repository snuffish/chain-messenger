import { ParamListBase, StackNavigationState } from "@react-navigation/native"
import { StackNavigationEventMap, StackNavigationOptions, createStackNavigator } from "@react-navigation/stack"
import { withLayoutContext } from "expo-router"

export const createLayout = () => {
    const { Navigator } = createStackNavigator()

    const layout = withLayoutContext<
        StackNavigationOptions,
        typeof Navigator,
        StackNavigationState<ParamListBase>,
        StackNavigationEventMap
    >(Navigator)

    return layout
}
