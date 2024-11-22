import { Link, Redirect } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const App = () => {

    //return <Redirect href="/(stack)/home" />
    //return <Redirect href="/drawer" />
    return <Redirect href="/home" />

  /*return (
    <SafeAreaView>
      <View className="mt-6 mx-2.5">
        <Text className='text-3xl' style={{ fontFamily: 'Inter-Black' }}>Hola Mundo</Text>
        <Text className='text-3xl font-inter-black text-primary'>Hola Mundo</Text>
        <Text className='text-3xl font-inter-medium text-secondary'>Hola Mundo</Text>
        <Text className='text-3xl font-inter-light text-tertiary'>Hola Mundo</Text>
        <Link href="/products">Productos</Link>
      </View>
    </SafeAreaView>
  )*/
}

export default App