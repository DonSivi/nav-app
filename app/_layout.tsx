import { useEffect } from 'react';
import { Slot, SplashScreen, Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { useFonts } from 'expo-font'
import "./global.css";

const _layout = () => {

  SplashScreen.preventAutoHideAsync();

  const [ fontsLoaded, error ] = useFonts({
    'Inter_24pt-Black': require('../assets/fonts/Inter_24pt-Black.ttf'),
    'Inter_24pt-Light': require('../assets/fonts/Inter_24pt-Light.ttf'),
    'Inter_24pt-Medium': require('../assets/fonts/Inter_24pt-Medium.ttf')
  })

  useEffect(() => {
    if(error) throw error
    if(fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])
  
  if(!fontsLoaded && !error) return null

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  )
  //return <Slot />
  //return <Stack />
}

export default _layout