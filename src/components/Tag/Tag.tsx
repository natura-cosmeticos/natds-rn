/* eslint-disable complexity */
import React from 'react'

import { useTheme } from 'styled-components/native'
import {
  Container, getTextColorByName, Label, LabelContainer
} from './Tag.styles'
import { TagProps } from './Tag.types'
import { Icon } from '../Icon'
import { buildTheme } from '../../common/themeSelectors'

export const Tag = (props: TagProps) => {
  const {
    testID = 'ds-tag', color = 'primary', size = 'small', borderPosition = 'default',
    accessible, accessibilityRole, accessibilityHint, accessibilityLabel, accessibilityState,
    allowFontScaling, maxFontSizeMultiplier, text, brand, iconLeft, iconRight
  } = props
  const ctxTheme = useTheme()
  const theme = brand ? buildTheme(brand, 'light') : ctxTheme
  const iconColor = getTextColorByName({ theme, color, brand })

  return (
    <Container
      testID={testID}
      brand={brand}
      color={color}
      size={size}
      borderPosition={borderPosition}
    >
      <LabelContainer>
        {(iconLeft)
          && (
            <Icon
              accessibilityRole="imagebutton"
              style={{ color: iconColor }}
              name={(iconLeft)}
              size="small"
            />
          )}
        {
          text
          && (
          <Label
            color={color}
            brand={brand}
            testID={`${testID}-label`}
            accessible={accessible}
            accessibilityRole={accessibilityRole}
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            accessibilityState={accessibilityState}
            allowFontScaling={allowFontScaling}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
          >
            {text}
          </Label>
          )
        }
        {(iconRight)
          && (
            <Icon
              accessibilityRole="imagebutton"
              style={{ color: iconColor }}
              name={(iconRight)}
              size="small"
            />
          )}

      </LabelContainer>
    </Container>
  )
}
