import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="primary">50x50</ThemeText>
        <ThemeText variant="secondary">1000</ThemeText>
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="C" />
        <CalculatorButton label="+/-" />
        <CalculatorButton label="del" />
        <CalculatorButton label="%" color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="7" />
        <CalculatorButton label="8" />
        <CalculatorButton label="9" />
        <CalculatorButton label="X" color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="4" />
        <CalculatorButton label="5" />
        <CalculatorButton label="6" />
        <CalculatorButton label="-" color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="1" />
        <CalculatorButton label="2" />
        <CalculatorButton label="3" />
        <CalculatorButton label="+" color={Colors.orange} />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton label="0" doubleSize />
        <CalculatorButton label="." />
        <CalculatorButton label="=" color={Colors.orange} />
      </View>
    </View>
  )
}

export default CalculatorApp
