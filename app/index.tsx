import { PassCode } from '@/components/pass-code'
import { View } from 'react-native'

import '../reanimated-config'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <PassCode />
    </View>
  )
}
