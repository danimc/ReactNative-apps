import { Colors } from '@/constants/Colors'
import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
    flex: 1,
  },

  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 20,
  },

  mainResult: {
    color: Colors.textPrimary,
    fontSize: 50,
    textAlign: 'right',
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 30,
    textAlign: 'right',
  },
})
