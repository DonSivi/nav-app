import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import { View, Text, FlatList } from 'react-native'

const ProductScreen = () => {
  return (
    <View className='flex flex-1 px-4'>
      <FlatList
        data={products} 
        keyExtractor={ (item) => item.id }
        renderItem={({item}) => 
                    <View className='mt-10'>
                      <Text className='text-2xl font-inter-black'>{ item.title }</Text>
                      <Text className='font-inter-medium'>{ item.description }</Text>
                      <View className='flex flex-row justify-between'>
                        <Text className='font-inter-black'>{ item.price }</Text>
                        <Link href={`/products/${item.id}`} className='text-primary'>Ver detalles</Link>
                      </View>
                    </View>
                  } 
      />
    </View>
  )
}

export default ProductScreen