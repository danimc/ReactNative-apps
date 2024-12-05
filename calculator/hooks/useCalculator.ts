import React, { useEffect, useState } from 'react'

export enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0')

  const [number, setNumber] = useState('0')
  const [prevNumber, setPrevNumber] = useState('0')
  const lastOperation = React.useRef<Operator>()

  useEffect(() => {
    if (lastOperation.current) {
      setFormula(`${prevNumber} ${lastOperation.current} ${number}`)
    } else {
      setFormula(number)
    }
  }, [number])

  useEffect(() => {
    //setFormula(number)
  }, [number])

  const clean = () => {
    setNumber('0')
    setPrevNumber('0')
    setFormula('0')

    lastOperation.current = undefined
  }

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))
    } else {
      setNumber(`-${number}`)
    }
  }

  const deleteLast = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0')
    } else {
      setNumber(number.slice(0, -1))
    }
  }

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

  const setLastNumber = () => {
    if (number.endsWith('.')) return setPrevNumber(number.slice(0, -1))
    setPrevNumber(number)
    setNumber('0')
  }

  const handleOperation = (operation: Operator) => {
    setLastNumber()
    lastOperation.current = operation
  }

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    clean,
    toggleSign,
    deleteLast,
    handleOperation,
  }
}
