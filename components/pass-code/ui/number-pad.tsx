import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import DeleteIcon from '@expo/vector-icons/FontAwesome6'

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, 'delete']

export const NumberPad = ({ onPressKey }: { onPressKey: (key: number | string) => void }) => {
  return (
    <View style={styles.container}>
      {keys.map((item, index) => {
        if (item === 'delete') {
          return (
            <TouchableOpacity key={index} style={styles.key} onPress={() => onPressKey(item)}>
              <DeleteIcon name='arrow-left-long' size={24} color='grey' />
            </TouchableOpacity>
          )
        }

        return (
          <TouchableOpacity key={index} style={styles.key} onPress={() => onPressKey(item)}>
            <Text style={styles.text}>{item}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 70,
  },

  key: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
})
