import React from 'react'
import { useTheme } from 'styled-components/native'
import { TouchableRipple } from '../TouchableRipple/TouchableRipple'
import { getSize } from '../../common/themeSelectors'
import { IconButtonBaseProps } from './IconButton.types'

export const IconButtonBase = ({
  size = 'semi',
  IconComponent,
  disabled = false,
  onPress,
  testID
}: IconButtonBaseProps) => {
  const theme = useTheme()

  return (
    <TouchableRipple
      color="highlight"
      size={getSize(theme, size) / 2 + 5}
      onPress={onPress}
      disabled={disabled}
      testID={`${testID}-button`}
      style={{ borderRadius: 50 }}
    >
      {IconComponent}
    </TouchableRipple>
  )
}
