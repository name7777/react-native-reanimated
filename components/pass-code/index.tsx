import { useCallback, useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import AnimatedEnteredCode from './ui/animated-entered-code'
import { NumberPad } from './ui/number-pad'

const CORRECT_CODE = [1, 2, 3, 4]

export function PassCode() {
  const [passCode, setPassCode] = useState<number[]>([])
  const [isCorrect, setIsCorrect] = useState(false)

  const onPressKey = (num: number | string) => {
    if (typeof num === 'string') {
      setPassCode(prev => prev.slice(0, -1))
    } else {
      if (passCode.length === CORRECT_CODE.length) {
        return
      }
      setPassCode(prev => [...prev, num])
    }
  }

  const renderItem = useCallback(
    ({ item }: { item: number }) => {
      const isFullCode = passCode.length === CORRECT_CODE.length
      return <AnimatedEnteredCode item={item} isCorrect={isCorrect} isFullCode={isFullCode} />
    },
    [passCode, isCorrect],
  )

  useEffect(() => {
    if (passCode.length === CORRECT_CODE.length) {
      const isCorrect = passCode.every((item, index) => item === CORRECT_CODE[index])

      setIsCorrect(isCorrect)
    }
  }, [passCode, isCorrect])

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={passCode}
        renderItem={renderItem}
        horizontal
      />
      <NumberPad onPressKey={onPressKey} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentContainerStyle: {
    flex: 1,
    gap: 50,
    justifyContent: 'center',
  },
})
