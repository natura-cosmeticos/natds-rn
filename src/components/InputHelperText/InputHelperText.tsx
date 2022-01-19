import React from 'react'
import styled from 'styled-components/native'
import { CSSObject, useTheme } from 'styled-components'
import { Color } from '@naturacosmeticos/natds-themes/react-native'
import { IconName } from '@naturacosmeticos/natds-icons'
import { Icon } from '../Icon'
import {
  getColorMediumEmphasis, getSpacingMicro
} from '../../common/themeSelectors'

export interface HelperTextProps {
  color?: string;
  content: string;
  feedback?: 'success' | 'error';
}

const HelperTextContainer = styled.View(({ theme }): CSSObject => ({
  alignItems: 'center',
  flexDirection: 'row',
  marginTop: getSpacingMicro(theme)
}))

const HelperText = styled.Text<Pick<HelperTextProps, 'feedback' | 'color'>>(
  ({ color, feedback, theme }): CSSObject => ({
    color: color || getColorMediumEmphasis(theme),
    fontFamily: theme.textField.helperText.primary.fontFamily,
    fontSize: theme.textField.helperText.fontSize,
    fontWeight: theme.textField.helperText.primary.fontWeight,
    letterSpacing: theme.textField.helperText.letterSpacing,
    lineHeight: theme.textField.helperText.fontSize * theme.textField.helperText.lineHeight,
    marginLeft: feedback && getSpacingMicro(theme)
  })
)

export const InputHelperText = ({ color, content, feedback }: HelperTextProps) => {
  const theme = useTheme()
  const feedbackProps = {
    error: {
      iconColor: 'alert',
      iconName: 'outlined-action-cancel'
    },
    success: {
      iconColor: 'success',
      iconName: 'outlined-action-check'
    }
  }
  const iconProps = feedback && feedbackProps[feedback]

  return (
    <HelperTextContainer theme={theme}>
      { iconProps
        && (
        <Icon
          color={iconProps.iconColor as keyof Color}
          name={iconProps.iconName as IconName}
          size="small"
          testID="icon"
        />
        )}
      <HelperText testID="helper-text" color={color} feedback={feedback}>
        { content }
      </HelperText>
    </HelperTextContainer>
  )
}
