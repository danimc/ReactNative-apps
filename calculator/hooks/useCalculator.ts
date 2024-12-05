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
    console.log('numberString', numberString)
  }

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
  }
}
