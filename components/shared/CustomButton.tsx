import { View, Text, Pressable, PressableProps } from 'react-native'

interface Props extends PressableProps {
    children: string,
    color?: 'primary' | 'secondary' | 'tertiary'
    variant?: 'contained' | 'text-only',
    className?: string
}

const CustomButton = ({children, color='primary', variant='contained', className, onPress, onLongPress}: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color]

    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'
    }[color]

    if(variant === 'text-only'){
        return (
            <Pressable className={`p-3 ${className}`} onPress={onPress} onLongPress={onLongPress}>
                <Text className={`text-center ${textColor} font-inter-medium`} >{children}</Text>
            </Pressable>
        )
    }

    return (
        <Pressable className={`p-3 ${className} rounded-md ${ btnColor } active:opacity-90`} onPress={onPress} onLongPress={onLongPress}>
            <Text className='text-white text-center'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton