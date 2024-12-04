import React from 'react'
import { useFonts } from 'expo-font'
import { View, Text } from 'react-native'
import { Slot } from 'expo-router'

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <View>
      <Text>Header</Text>
      <Slot />
      <Text>Footer</Text>
    </View>
  )
}

export default RootLayout
