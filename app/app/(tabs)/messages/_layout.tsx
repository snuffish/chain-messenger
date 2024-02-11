import { ParamListBase, StackNavigationState } from '@react-navigation/native';
import { StackNavigationEventMap, StackNavigationOptions, createStackNavigator } from '@react-navigation/stack';
import { withLayoutContext } from 'expo-router';
import React from 'react';

const { Navigator } = createStackNavigator()

const Layout = withLayoutContext<
    StackNavigationOptions,
    typeof Navigator,
    StackNavigationState<ParamListBase>,
    StackNavigationEventMap
>(Navigator)

export default function MessagesLayout() {
    return (
        <Layout>
            <Layout.Screen name='index' options={{ title: 'Messages' }} />
            <Layout.Screen name='test' options={{ title: 'TEST PAGE' }} />
            <Layout.Screen name='[id]' options={{ title: 'ID PAGE' }} />
            <Layout.Screen name='sub/index' options={{ title: 'SUB PAGE' }} />
        </Layout>
    )
}
