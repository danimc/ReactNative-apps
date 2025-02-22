import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>HomeScreen</Text>
      </View>

      <Link href={'/products'}>Products</Link>
      <Link href={'/info'}>About</Link>
      <Link href={'/settings'}>Settings</Link>
    </SafeAreaView>
  )
}

export default HomeScreen
