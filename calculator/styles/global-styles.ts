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

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 100,
    height: 70,
    width: 70,
    marginHorizontal: 10,
    backgroundColor: Colors.darkGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.textPrimary,
    fontSize: 30,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
    padding: 10,
  },
})
