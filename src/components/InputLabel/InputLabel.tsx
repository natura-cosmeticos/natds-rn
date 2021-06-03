import React from 'react';
import styled from 'styled-components/native';
import { CSSObject, useTheme } from 'styled-components';
import {
  getColorMediumEmphasis, getSpacingMicro, getTypographyStyles,
} from '../../common/themeSelectors';

export interface LabelProps {
  color?: string;
  content: string;
  required?: boolean;
}

export const Label = styled.Text<Pick<LabelProps, 'color'>>(({ color, theme }): CSSObject => {
  const { subtitle2 } = getTypographyStyles(theme);

  return ({
    color: color || getColorMediumEmphasis(theme),
    fontSize: subtitle2.fontSize,
    fontWeight: subtitle2.fontWeight,
    letterSpacing: subtitle2.letterSpacing,
    marginBottom: getSpacingMicro(theme),
  });
});

export const InputLabel = ({ color, content, required }: LabelProps) => {
  const theme = useTheme();

  return (
    <Label testID="label" color={color} theme={theme}>
      { content }
      { required && '*' }
    </Label>
  );
};
