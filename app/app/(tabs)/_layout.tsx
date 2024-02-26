import { Info, MessageCircle, Settings } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen
        name="messages"
        options={{
          headerTitle: 'Messages',
          title: 'Messages',
          tabBarIcon: () => <MessageCircle />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerTitle: 'Settings',
          title: 'Settings',
          tabBarIcon: () => <Settings />
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          headerTitle: 'Info',
          title: 'Info',
          tabBarIcon: () => <Info />
        }}
      />
    </Tabs>
  )
}
