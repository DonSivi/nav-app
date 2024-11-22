import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text, SafeAreaView } from 'react-native'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className='px-10'>
        <CustomButton color='primary' className='mb-2' onPress={ () => router.push('/products') }>Productos</CustomButton>
        <CustomButton color='secondary' className='mb-2' onPress={ () => router.push('/profile') }>Perfil</CustomButton>
        <CustomButton color='tertiary' className='mb-2' onPress={ () => router.push('/settings') }>Ajustes</CustomButton>
        <CustomButton variant='text-only' className='mb-2' onPress={ () => router.push('/products') }>Products</CustomButton>
        {/*<Link href="/products" className='mb-5'>Productos {' '}</Link>*/}
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen