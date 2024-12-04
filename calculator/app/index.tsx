import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="primary">50x50</ThemeText>
      <ThemeText variant="secondary">1000</ThemeText>
    </View>
  )
}

export default CalculatorApp
