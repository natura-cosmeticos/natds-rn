import React from 'react'
import { withTheme } from 'styled-components/native'
import { Icon } from '../Icon'
import {
  Label, LabelText, Surface, getSelectTheme
} from './GayaButton.styles'
import { TouchableRipple } from '../TouchableRipple/TouchableRipple'
import { GayaButtonBaseProps } from './GayaButton.types'

const GayaButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  textTransform,
  disabled = false,
  iconName,
  color,
  iconPosition = 'right',
  onPress,
  size = 'medium',
  testID = 'button-base',
  text,
  brand,
  mode,
  theme,
  type = 'contained',
  textLabelStyle
}: GayaButtonBaseProps) => {
  const iconColor = disabled
    ? theme.button[type].color.disable.label
    : theme.button[type].color.enable.label

  return (
    <TouchableRipple
      color="highlight"
      disabled={disabled}
      hideOverflow
      onPress={disabled ? () => ({}) : onPress}
      style={{ borderRadius: getSelectTheme(brand, { theme, type, color })?.buttonBorderRadius }}
    >
      <Surface
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        disabled={disabled}
        size={size}
        brand={brand}
        mode={mode}
        color={color}
        testID={testID}
        type={type}
      >
        <Label iconPosition={iconPosition}>
          <LabelText
            textTransform={textTransform}
            iconName={iconName}
            iconPosition={iconPosition}
            testID="button-label"
            type={type}
            brand={brand}
            mode={mode}
            color={color}
            disabled={disabled}
            style={textLabelStyle}
          >
            {text}
          </LabelText>
          {iconName
            && (
            <Icon
              accessibilityRole="imagebutton"
              style={{ color: iconColor }}
              name={iconName}
              size="small"
            />
            )}
        </Label>
      </Surface>
    </TouchableRipple>
  )
}

export const GayaButtonBase = withTheme(GayaButtonComponent)
