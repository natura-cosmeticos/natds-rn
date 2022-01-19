import React from 'react'
import { Icon } from '../Icon/Icon'
import { IconButtonProps } from './IconButton.types'
import {
  getIconColor,
  getIconSize
} from './IconButton.helpers'
import { IconButtonBase } from './IconButtonBase'

export const IconButton = ({
  accessibilityHint,
  accessibilityLabel,
  color = 'highEmphasis',
  iconColor = color,
  icon,
  size = 'semi',
  backgroundStyle = 'none',
  disabled = false,
  onPress,
  testID = 'ds-icon-button'
}: IconButtonProps) => (
  <IconButtonBase
    disabled={disabled}
    size={size}
    backgroundStyle={backgroundStyle}
    testID={testID}
    onPress={disabled ? undefined : onPress}
    IconComponent={(
      <Icon
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="imagebutton"
        size={getIconSize(size)}
        color={getIconColor(iconColor, disabled)}
        name={icon}
        testID={`${testID}-icon`}
      />
      )}
  />
)
