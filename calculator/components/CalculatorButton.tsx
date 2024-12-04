import React from 'react'
import { Text, Pressable } from 'react-native'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'
import * as Haptics from 'expo-haptics'

interface Props {
  label: string
  color?: string
  blackText?: boolean
  doubleSize?: boolean
  onPress?: () => void
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  const handleOnPress = () => {
    Haptics.selectionAsync()

    if (onPress) onPress()
  }

  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.5 : 1,
      })}
      onPress={handleOnPress}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? 'black' : 'white',
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}

export default CalculatorButton
