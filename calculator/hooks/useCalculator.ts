import React, { useEffect, useState } from 'react'

enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0')

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const lastOperation = React.useRef<Operator | null>(null)

  useEffect(() => {
    setFormula(number)
  }, [number])

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return
    if (number.startsWith('0') && !number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString)
      }

      // evalúa si el número es 0 y no hay punto
      if (numberString === '0' && number.includes('.')) {
        return setNumber(number + numberString)
      }

      // evalúa si es diferente de 0 y no tiene punto y es el primer número
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString)
      }

      // evita el 0000.0
      if (numberString === '0' && !number.includes('.')) {
        return
      }
    }
    setNumber(number + numberString)
  }

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
  }
}
