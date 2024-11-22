import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    // tabBarShowLabel: false quita los nombres de los íconos
    <Tabs screenOptions={{ 
        headerShown: false, // no muestra el titulo arriba
        tabBarInactiveTintColor: 'grey',
        tabBarActiveTintColor: 'white',
        tabBarStyle: {
            backgroundColor: 'indigo'
        },
        tabBarActiveBackgroundColor: 'purple'
    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          title: 'Stack',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heartbeat" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout