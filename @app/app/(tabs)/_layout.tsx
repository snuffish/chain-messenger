import { Info, MessageCircle, Settings } from '@tamagui/lucide-icons'
import { Tabs } from 'expo-router'

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
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

export default TabsLayout
