import React from 'react'
import { Text, type TextProps } from 'react-native'
import { globalStyles } from '@/styles/global-styles'

interface Props extends TextProps {
  variant?: 'primary' | 'secondary'
}

const ThemeText = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <Text
      {...props}
      style={[
        { color: 'white', fontFamily: 'SpaceMono' },
        variant === 'primary' && globalStyles.mainResult,
        variant === 'secondary' && globalStyles.subResult,
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
    >
      {children}
    </Text>
  )
}

export default ThemeText
