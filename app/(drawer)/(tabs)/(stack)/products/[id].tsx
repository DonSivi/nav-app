import { products } from '@/store/products.store'
import { Redirect, useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

const ProductDetail = () => {
    const {id} = useLocalSearchParams()

    // Busco el producto por ID
    const product = products.find( product => product.id === id )

    // Si no existe redirijo al Home
    if(!product) return <Redirect href="/" />

    return (
        <View className='px-5 mt-2'>
            <Text className='font-inter-black text-2xl'>{ product.title }</Text>
            <Text className='font-inter-medium'>{ product.description }</Text>
            <Text className='font-inter-black'>{ product.price }</Text>
        </View>
    )
}

export default ProductDetail