import { useCallback, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'

import AnimatedEnteredCode from './ui/animated-entered-code'
import { NumberPad } from './ui/number-pad'

const CORRECT_CODE = [1, 2, 3, 4]

export function PassCode() {
  const [code, setCode] = useState<number[]>([])

  const onPressKey = (num: number | string) => {
    if (typeof num === 'string') {
      setCode(prev => prev.slice(0, -1))
    } else {
      setCode(prev => [...prev, num])
    }
  }

  const renderItem = useCallback(({ item }: { item: number }) => {
    return <AnimatedEnteredCode item={item} />
  }, [])

  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={styles.contentContainerStyle} data={code} renderItem={renderItem} horizontal />
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
