import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className=" flex p-5 items-center  gap-5 w-screen bg-gray-100 h-screen">
        <Text>HomeScreen</Text>
        <View className="flex flex-col gap-5 w-1/2">
          <Link href={'/products'} asChild>
            <CustomButton color="primary"> Products </CustomButton>
          </Link>
          <CustomButton
            color="secondary"
            onPress={() => router.push('/settings')}
          >
            Settings
          </CustomButton>
        </View>
        <Link href={'/info'}>About</Link>
        <Link href={'/settings'}>Settings</Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
