import React from 'react';
import { withTheme } from 'styled-components/native';
import { Theme } from '../../common/themeSelectors';
import { Icon } from '../Icon/Icon';

import {
  AlertWrapper,
  AlertTitle,
  AlertText,
  Variants,
  Types,
  AlertContent,
  IconContent,
} from './Alert.styles';


export interface AlertProps {
  /**
   * Default theme
   */
  theme: Theme;
  /**
    * Variant 'standard' | 'outlined' | 'filled'
    */
  variant: Variants;
  /**
    * Color types 'check' | 'cancel' | 'warning' | 'info'
    */
  type: Types;
  /**
    * Alert title
    */
  title?: string;
  /**
    * Alert message
    */
  message: string;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

const getIcon = (type: Types) => {
  const icons = {
    error: {
      name: 'outlined-alert-cancel',
    },
    info: {
      name: 'outlined-alert-info',
    },
    success: {
      name: 'outlined-alert-check',
    },
    warning: {
      name: 'outlined-alert-warning',
    },
  };

  return icons[type];
};

const AlertComponent = ({
  testID = 'alert',
  theme,
  variant,
  type,
  title,
  message,
}: AlertProps) => (
    <AlertWrapper theme={theme} testID={testID} variant={variant} type={type}>
      <IconContent testID={`${testID}-icon`}>
        <Icon name={getIcon(type).name} ></Icon>
      </IconContent>
      <AlertContent testID={`${testID}-content`}>
        {title && <AlertTitle>{title}</AlertTitle>}
        <AlertText>{message}</AlertText>
      </AlertContent>
    </AlertWrapper>
);

export const Alert = withTheme(AlertComponent);
