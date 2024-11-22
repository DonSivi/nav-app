import { Stack } from 'expo-router'

const StackLayaout = () => {
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >
            <Stack.Screen 
                name="home/index"
                options={{
                    title: 'Home',
                    animation: 'ios_from_left'
                }}
            />
            <Stack.Screen 
                name="products/index"
                options={{
                    title: 'Productos',
                    animation: 'ios_from_left'
                }}
            />
            <Stack.Screen 
                name="profile/index"
                options={{
                    title: 'Perfil',
                    animation: 'ios_from_left'
                }}
            />
            <Stack.Screen 
                name="settings/index"
                options={{
                    title: 'Ajustes',
                    animation: 'ios_from_left'
                }}
            />
        </Stack>
    )
}

export default StackLayaout