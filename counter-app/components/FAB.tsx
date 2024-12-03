import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface Props {
  label: string
  position?: 'left' | 'right'

  onPress?: () => void
  onLongPress?: () => void
}

export default function FAB({ label, onLongPress, onPress, position }: Props) {
  return (
    <Pressable
      style={[
        styles.floatingButton,
        position === 'left' ? styles.positionLeft : styles.positionRight,
      ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    backgroundColor: 'blue',
    padding: 16,
    borderRadius: 100,
  },
  label: {
    color: 'white',
  },
  positionRight: {
    right: 16,
  },
  positionLeft: {
    left: 16,
  },
})
