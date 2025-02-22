import { Text, Pressable, PressableProps, View } from 'react-native'
import React from 'react'

interface Props extends PressableProps {
  children: string
  color?: 'primary' | 'secondary' | 'tertiary'
}

const CustomButton = React.forwardRef(
  (
    { children, color = 'primary', onPress, onLongPress }: Props,
    ref: React.Ref<View>,
  ) => {
    const bgColor = {
      primary: 'bg-blue-500',
      secondary: 'bg-red-500',
      tertiary: 'bg-green-500',
    }[color]

    return (
      <Pressable
        className={`p-3 w-full rounded-md ${bgColor}`}
        onPress={onPress}
        onLongPress={onLongPress}
        ref={ref}
      >
        <Text className="text-white text-center active:opacity-90 font-work-medium">
          {children}
        </Text>
      </Pressable>
    )
  },
)

export default CustomButton
