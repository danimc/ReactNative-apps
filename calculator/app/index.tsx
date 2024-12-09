import { View } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'
import { Operator, useCalculator } from '@/hooks/useCalculator'

const CalculatorApp = () => {
  const {
    buildNumber,
    clean,
    deleteLast,
    formula,
    handleOperation,
    prevNumber,
    toggleSign,
    calculateFormula,
  } = useCalculator()

  return (
    <View style={globalStyles.calculatorContainer}>
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="primary">{formula}</ThemeText>
        {formula === prevNumber ? (
          <ThemeText variant="secondary"> </ThemeText>
        ) : (
          <ThemeText variant="secondary">{prevNumber}</ThemeText>
        )}
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={clean} label="C" />
        <CalculatorButton onPress={toggleSign} label="+/-" />
        <CalculatorButton onPress={deleteLast} label="del" />
        <CalculatorButton
          onPress={() => handleOperation(Operator.DIVIDE)}
          label="%"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('7')} label="7" />
        <CalculatorButton onPress={() => buildNumber('8')} label="8" />
        <CalculatorButton onPress={() => buildNumber('9')} label="9" />
        <CalculatorButton
          onPress={() => handleOperation(Operator.MULTIPLY)}
          label="X"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('4')} label="4" />
        <CalculatorButton onPress={() => buildNumber('5')} label="5" />
        <CalculatorButton onPress={() => buildNumber('6')} label="6" />
        <CalculatorButton
          onPress={() => handleOperation(Operator.SUBTRACT)}
          label="-"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton onPress={() => buildNumber('1')} label="1" />
        <CalculatorButton onPress={() => buildNumber('2')} label="2" />
        <CalculatorButton onPress={() => buildNumber('3')} label="3" />
        <CalculatorButton
          onPress={() => handleOperation(Operator.ADD)}
          label="+"
          color={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => buildNumber('0')}
          label="0"
          doubleSize
        />
        <CalculatorButton label="." onPress={() => buildNumber('.')} />
        <CalculatorButton
          onPress={calculateFormula}
          label="="
          color={Colors.orange}
        />
      </View>
    </View>
  )
}

export default CalculatorApp
