import React from 'react';
import styled from 'styled-components/native';
import { CSSObject, useTheme } from 'styled-components';
import { Color } from '@naturacosmeticos/natds-themes/react-native';
import { IconName } from '@naturacosmeticos/natds-icons';
import { Icon } from '../Icon';
import {
  getColorMediumEmphasis, getSpacingMicro, getTypographyStyles,
} from '../../common/themeSelectors';

export interface HelperTextProps {
  color?: string;
  content: string;
  feedback?: 'success' | 'error'
}

const HelperText = styled.Text<Pick<HelperTextProps, 'color' | 'feedback'>>(({ color, feedback, theme }): CSSObject => {
  const { caption } = getTypographyStyles(theme);

  return ({
    color: color || getColorMediumEmphasis(theme),
    flexDirection: 'row',
    fontSize: caption.fontSize,
    fontWeight: caption.fontWeight,
    letterSpacing: caption.letterSpacing,
    marginLeft: feedback && getSpacingMicro(theme),
    marginTop: getSpacingMicro(theme),
  });
});

export const InputHelperText = ({ color, content, feedback }: HelperTextProps) => {
  const theme = useTheme();
  const feedbackProps = {
    error: {
      iconColor: 'alert',
      iconName: 'outlined-action-cancel',
    },
    success: {
      iconColor: 'success',
      iconName: 'outlined-action-check',
    },
  };
  const iconProps = feedback && feedbackProps[feedback];

  return (
    <HelperText testID="helper-text" feedback={feedback} color={color} theme={theme}>
      { iconProps
        && <Icon
          color={iconProps.iconColor as keyof Color}
          name={iconProps.iconName as IconName}
          size="small"
          testID="icon"
        />
      }
      { content }
  </HelperText>
  );
};
