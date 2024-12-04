import { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'

function AnimatedEnteredCode({ item, isCorrect, isFullCode }: { item: any; isCorrect: boolean; isFullCode: boolean }) {
  const scale = useSharedValue(0)
  const repeat = useSharedValue(0)
  const backgroundColor = useSharedValue('purple')

  scale.value = withSpring(1, { duration: 500 })
  repeat.value = !isCorrect && isFullCode ? withRepeat(withTiming(5, { duration: 100 }), 6, true) : 0
  backgroundColor.value =
    isCorrect && isFullCode ? withTiming('green', { duration: 500 }) : withTiming('purple', { duration: 500 })

  const animatedStyle = useAnimatedStyle(
    () => ({
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: backgroundColor.value,
      transform: [{ scale: scale.value }, { translateX: repeat.value }],
    }),
    [isFullCode, isCorrect],
  )

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
