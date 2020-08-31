import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
  getSpacingSmall,
  getSpacingTiny,
  getRadiusBySize,
  getColorOnPrimary,
  Theme,
} from '../../common/themeSelectors';

export type Variants = 'standard' | 'outlined' | 'filled';
export type Types = 'success' | 'error' | 'warning' | 'info';

interface BaseAlert {
  theme: Theme,
}

interface AlertWrapperProp {
  theme: Theme,
  type: Types,
  variant: Variants,
  testID?: string,
  children: ReactNode
}

const getAlertStyles = (type: Types) => {
  const styles = {
    error: {
      backgroundColor: '#F7DDD8',
    },
    info: {
      backgroundColor: '#D7E6F1',
    },
    success: {
      backgroundColor: '#E0EBDA',
    },
    warning: {
      backgroundColor: '#FBF2DA',
    },
  };

  return styles[type];
};

const AlertWrapperComponent = styled.View<AlertWrapperProp>(({ theme, type }) => ({
  ...getAlertStyles(type),
  borderRadius: getRadiusBySize(theme, 'medium'),
  flexDirection: 'row',
  margin: getSpacingSmall(theme),
  padding: getSpacingSmall(theme),
}));

export const AlertWrapper = (props: AlertWrapperProp) => <AlertWrapperComponent
  {...props}>
</AlertWrapperComponent>;

export const AlertContent = styled.View<BaseAlert>(() => ({
  flexDirection: 'column',
  flexShrink: 1,
}));

export const IconContent = styled.View<BaseAlert>(({ theme }) => ({
  marginRight: getSpacingTiny(theme),
  marginTop: 2,
}));

export const AlertTitle = styled.Text<BaseAlert>(({ theme }) => ({
  flexWrap: 'wrap',
  fontSize: 20,
  fontWeight: 600,
  letterSpacing: 0.24,
  marginBottom: getSpacingTiny(theme),
}));

export const AlertText = styled.Text<BaseAlert>(({ theme }) => ({
  color: getColorOnPrimary(theme),
  fontSize: 16,
  letterSpacing: 0.51,
}));
