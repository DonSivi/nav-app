import { FontAwesome } from '@expo/vector-icons'
import { DrawerActions, StackActions } from '@react-navigation/native'
import { router, Stack, useNavigation } from 'expo-router'

const StackLayaout = () => {

    const navigation = useNavigation()

    const onHeaderLeftClick = (canGoBack:boolean=true) => {
        if(canGoBack){
            //navigation.dispatch(StackActions.pop())
            router.back()
            return
        }
        navigation.dispatch(DrawerActions.toggleDrawer)
      }
    
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <FontAwesome name={canGoBack ? 'arrow-left' : 'bars'} size={20} className='mr-5' color={tintColor} onPress={() => onHeaderLeftClick(canGoBack)} />
                )
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