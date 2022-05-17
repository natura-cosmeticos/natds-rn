/* eslint-disable max-len */
import styled from 'styled-components/native'
import {
  getSpacingSmall,
  getSpacingTiny,
  Theme
} from '../../common/themeSelectors'
import {
  AlertCustomProps, AlertProps, Types, Variants
} from './Alert.types'

interface BaseAlert {
  theme: Theme;
}

type AlertWrapperProp = BaseAlert & AlertProps

const getAlertStyles = (
  type: Types = 'info', variant: Variants = 'standard', backgroundColorName = 'link', borderColorName = 'link'
) => (theme: Theme) => {
  const alertStylesMap = {
    info: 'link',
    error: 'alert',
    success: 'success',
    warning: 'warning'
  }

  const styles = {
    standard: {
      backgroundColor: `${theme.color[alertStylesMap[type]]}29`
    },
    filled: {
      backgroundColor: `${theme.color[alertStylesMap[type]]}29`
    },
    outlined: {
      backgroundColor: `${theme.color[alertStylesMap[type]]}29`,
      borderColor: theme.color[alertStylesMap[type]]
    },
    custom: {
      backgroundColor: `${theme.color[backgroundColorName]}29`,
      borderColor: theme.color[borderColorName]
    }
  }

  return type !== 'custom' ? styles[variant] : styles.custom
}

export const AlertWrapper = styled.View<AlertWrapperProp>(({
  theme, type, variant, backgroundColorName, borderColorName
}: AlertCustomProps & BaseAlert & AlertWrapperProp) => ({
  ...getAlertStyles(type, variant, backgroundColorName, borderColorName)(theme),
  borderWidth: variant === 'outlined' ? 1 : 0,
  borderRadius: theme.alert.borderRadius,
  flexDirection: 'row',
  margin: getSpacingSmall(theme),
  padding: getSpacingSmall(theme)
}))

export const AlertContent = styled.View<BaseAlert>(() => ({
  flexDirection: 'column',
  flexShrink: 1
}))

export const IconContent = styled.View<BaseAlert>(({ theme }) => ({
  marginRight: getSpacingTiny(theme),
  marginTop: 2
}))

export const AlertTitle = styled.Text<AlertWrapperProp>(({ theme, titleColorName = 'neutral900' }: AlertCustomProps & BaseAlert) => ({
  flexWrap: 'wrap',
  color: theme.color[titleColorName],
  fontFamily: theme.alert.title.primary.fontFamily,
  fontSize: theme.alert.title.fontSize,
  fontWeight: theme.alert.title.primary.fontWeight,
  letterSpacing: theme.alert.title.letterSpacing,
  lineHeight: theme.alert.title.fontSize * theme.alert.title.lineHeight,
  marginBottom: getSpacingTiny(theme)
}))

export const AlertText = styled.Text<AlertWrapperProp>(({ theme, messageColorName = 'neutral900' }: AlertCustomProps & BaseAlert) => ({
  color: theme.color[messageColorName],
  fontFamily: theme.alert.content.primary.fontFamily,
  fontSize: theme.alert.content.fontSize,
  fontWeight: theme.alert.content.primary.fontWeight,
  letterSpacing: theme.alert.content.letterSpacing,
  lineHeight: theme.alert.content.fontSize * theme.alert.content.lineHeight
}))
