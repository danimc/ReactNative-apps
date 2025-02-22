import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Home',
        }}
      />
    </Stack>
  )
}

export default StackLayout
