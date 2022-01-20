import React from 'react'
import styled from 'styled-components/native'
import { CSSObject, useTheme } from 'styled-components'
import {
  getColorMediumEmphasis, getSpacingMicro
} from '../../common/themeSelectors'

export interface LabelProps {
  color?: string;
  content: string;
  required?: boolean;
}

export const Label = styled.Text<Pick<LabelProps, 'color'>>(({ color, theme }): CSSObject => ({
  color: color || getColorMediumEmphasis(theme),
  fontFamily: theme.textField.label.primary.fontFamily,
  fontSize: theme.textField.label.fontSize,
  fontWeight: theme.textField.label.primary.fontWeight,
  letterSpacing: theme.textField.label.letterSpacing,
  lineHeight: theme.textField.label.fontSize * theme.textField.label.lineHeight,
  marginBottom: getSpacingMicro(theme)
}))

export const InputLabel = ({ color, content, required }: LabelProps) => {
  const theme = useTheme()

  return (
    <Label testID="label" color={color} theme={theme}>
      { content }
      { required && '*' }
    </Label>
  )
}
