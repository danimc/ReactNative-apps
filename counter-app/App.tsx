import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import FAB from './components/FAB'
import { useState } from 'react'

export default function App() {
  const handleCounterButton = () => {
    setCounter(counter + 1)
  }

  const handleResetCounter = () => {
    setCounter(0)
  }

  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{counter}</Text>
      <FAB label="Suma +1" onPress={handleCounterButton} />
      <FAB
        label="Reiniciar contador"
        position="left"
        onPress={handleResetCounter}
      />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHuge: {
    fontSize: 120,
    fontWeight: '100',
  },
})
