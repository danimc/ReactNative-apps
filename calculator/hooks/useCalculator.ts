import React, { useEffect, useState, useRef } from 'react'

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
  const lastOperation = useRef<Operator>()

  useEffect(() => {
    if (lastOperation.current) {
      setFormula(`${prevNumber} ${lastOperation.current} ${number}`)
    } else {
      setFormula(number)
    }
  }, [number])

  /*
  useEffect(() => {
    const subResult = calculateSubResult()

   
    setPrevNumber(subResult.toString())
  }, [formula])
  */

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
    if (lastOperation.current) {
      const subResult = calculateSubResult()
      setPrevNumber(subResult.toString())
      setNumber('0')
    } else {
      setLastNumber()
    }
    lastOperation.current = operation
  }

  const calculateSubResult = () => {
    const num1 = prevNumber ? Number(prevNumber) : 0
    const num2 = number ? Number(number) : 0

    switch (lastOperation.current) {
      case Operator.ADD:
        return num1 + num2
      case Operator.SUBTRACT:
        return num1 - num2
      case Operator.MULTIPLY:
        return num1 * num2
      case Operator.DIVIDE:
        return num2 !== 0 ? num1 / num2 : 0
      default:
        return num2
    }
  }

  const calculateTotal = () => {
    const subResult = calculateSubResult()
    setFormula(subResult.toString())
    setPrevNumber(' ')

    lastOperation.current = undefined
  }

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    calculateFormula: calculateTotal,
    clean,
    toggleSign,
    deleteLast,
    handleOperation,
  }
}
