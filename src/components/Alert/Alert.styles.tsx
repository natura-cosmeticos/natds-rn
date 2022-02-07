/* eslint-disable max-len */
import React, { ReactNode } from 'react'
import styled from 'styled-components/native'
import {
  getSpacingSmall,
  getSpacingTiny,
  Theme
} from '../../common/themeSelectors'

export type Variants = 'standard' | 'outlined' | 'filled';
export type Types = 'success' | 'error' | 'warning' | 'info';

interface BaseAlert {
  theme: Theme;
}

interface AlertWrapperProp {
  theme: Theme;
  type: Types;
  variant: Variants;
  testID?: string;
  children: ReactNode;
}

const getAlertStyles = (type: Types) => {
  const styles = {
    error: {
      backgroundColor: '#F7DDD8'
    },
    info: {
      backgroundColor: '#D7E6F1'
    },
    success: {
      backgroundColor: '#E0EBDA'
    },
    warning: {
      backgroundColor: '#FBF2DA'
    }
  }

  return styles[type]
}

const AlertWrapperComponent = styled.View<AlertWrapperProp>(({ theme, type }: AlertWrapperProp) => ({
  ...getAlertStyles(type),
  borderRadius: theme.alert.borderRadius,
  flexDirection: 'row',
  margin: getSpacingSmall(theme),
  padding: getSpacingSmall(theme)
}))

export const AlertWrapper: React.FC<AlertWrapperProp> = ({
  theme,
  type,
  variant,
  testID,
  children
}: AlertWrapperProp) => (
  <AlertWrapperComponent
    theme={theme}
    type={type}
    variant={variant}
    testID={testID}
  >
    {children}
  </AlertWrapperComponent>
)

export const AlertContent = styled.View<BaseAlert>(() => ({
  flexDirection: 'column',
  flexShrink: 1
}))

export const IconContent = styled.View<BaseAlert>(({ theme }) => ({
  marginRight: getSpacingTiny(theme),
  marginTop: 2
}))

export const AlertTitle = styled.Text<BaseAlert>(({ theme }) => ({
  flexWrap: 'wrap',
  fontFamily: theme.alert.title.primary.fontFamily,
  fontSize: theme.alert.title.fontSize,
  fontWeight: theme.alert.title.primary.fontWeight,
  letterSpacing: theme.alert.title.letterSpacing,
  lineHeight: theme.alert.title.fontSize * theme.alert.title.lineHeight,
  marginBottom: getSpacingTiny(theme)
}))

export const AlertText = styled.Text<BaseAlert>(({ theme }) => ({
  color: '#333333',
  fontFamily: theme.alert.content.primary.fontFamily,
  fontSize: theme.alert.content.fontSize,
  fontWeight: theme.alert.content.primary.fontWeight,
  letterSpacing: theme.alert.content.letterSpacing,
  lineHeight: theme.alert.content.fontSize * theme.alert.content.lineHeight
}))
