import { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated'

function AnimatedEnteredCode({ item }: { item: any }) {
  const scale = useSharedValue(0)

  scale.value = withSpring(1, { duration: 500 })

  const animatedStyle = useAnimatedStyle(() => ({
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'purple',
    transform: [{ scale: scale.value }],
  }))

  return (
    <Animated.View style={animatedStyle}>
      <View style={styles.container}>
        <Text style={styles.text}>{item}</Text>
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default memo(AnimatedEnteredCode)
