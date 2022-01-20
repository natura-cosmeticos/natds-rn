import React from 'react'
import { Text } from 'react-native'

export const Icon = (props) => {
  const { name } = props
  return (
    <Text {...props}>
      {name}
    </Text>
  )
}
