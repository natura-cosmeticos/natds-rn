import * as React from 'react'

import { StyleSheet, View } from 'react-native'
import { ComponentView } from './index'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20
  }
})

export default function Select() {
  return (
    <View style={styles.container}>
      <ComponentView color="#32a852" style={styles.box} />
    </View>
  )
}
