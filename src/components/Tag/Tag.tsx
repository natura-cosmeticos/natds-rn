import React from 'react'

import { Container, Label } from './Tag.styles'
import { TagProps } from './Tag.types'

export const Tag = (props: TagProps) => {
  const {
    testID = 'ds-tag', color = 'primary', size = 'small', borderPosition = 'default',
    accessible, accessibilityRole, accessibilityHint, accessibilityLabel, accessibilityState,
    allowFontScaling, maxFontSizeMultiplier, text
  } = props

  return (
    <Container
      testID={testID}
      color={color}
      size={size}
      borderPosition={borderPosition}
    >
      <Label
        color={color}
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
    </Container>
  )
}
