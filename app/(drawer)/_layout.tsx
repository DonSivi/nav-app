import CustomDrawer from '@/components/shared/CustomDrawer'
import { FontAwesome } from '@expo/vector-icons'
import { Drawer } from 'expo-router/drawer'
import React from 'react'

const DrawerLayout = () => {
  return (
    <Drawer
        drawerContent={ CustomDrawer }
        screenOptions={{
            //headerShown: false,
            overlayColor: 'rgba(0, 0, 0, 0.4)',
            drawerActiveTintColor: 'indigo',
            headerShadowVisible: false,
            sceneStyle: {
                backgroundColor: 'white'
            }
        }}
    >
        <Drawer.Screen
            name="(tabs)" // This is the name of the page and must match the url from root
            options={{
                headerShown: false,
                drawerLabel: 'Tabs + Stack',
                title: 'Tabs + Stack',
                drawerIcon: ({color, size}) => (
                    <FontAwesome size={size} name="stack-overflow" color={color} />
                )
            }}
        />
        <Drawer.Screen
            name="user/index" // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'User',
                title: 'Usuario',
                drawerIcon: ({color, size}) => (
                    <FontAwesome size={size} name="user-circle-o" color={color} />
                )
            }}
        />
        <Drawer.Screen
            name="schedule/index" // This is the name of the page and must match the url from root
            options={{
                drawerLabel: 'Schedule',
                title: 'Horario',
                drawerIcon: ({color, size}) => (
                    <FontAwesome size={size} name="calendar-o" color={color} />
                )
            }}
        />
    </Drawer>
  )
}

export default DrawerLayout