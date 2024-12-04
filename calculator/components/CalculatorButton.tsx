import React from 'react'
import { Text, Pressable } from 'react-native'
import { Colors } from '@/constants/Colors'
import { globalStyles } from '@/styles/global-styles'

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
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.5 : 1,
      })}
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
