/* eslint-disable max-lines */
import React from 'react';
import { View } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import { IAvatarSizes } from '@naturacosmeticos/natds-styles';
import IconAnonymous from '../../assets/images/anonymous.png';

import {
  Theme,
  getColorOnPrimary,
  getColorPrimary,
  getSpacingBySize,
} from '../../common/themeSelectors';

export type AvatarSizes = keyof IAvatarSizes;
export type AvatarColors = 'primary' | 'secondary' | 'default' | string;
export type AvatarTypes = 'image' | 'letter' | 'anonymous' | string;


export interface AvatarProps {
  /**
   * Divider variants `image' | 'letter' | 'anonymous`
   */
  type?: AvatarTypes;
  /**
   * The divider theme
   */
  theme: Theme;
  /**
   * Optional Value used com Letter type
   */
  text?: string;
  /**
   * Optional URL image used com Image type
   */
  imgSource?: any;
  /**
   * Optional Color
   */
  color?: AvatarColors;
  /**
   * Optional Size
   */
  size?: AvatarSizes;
  /**
   * Optional accessibilityLabel
   */
  accessibilityLabel?: string;
  /**
   * Optional accessibilityHint
   */
  accessibilityHint?: string;
  /**
   * Optional accessibilityRole
   */
  accessibilityRole?: string;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

const getViewStyles = (color: AvatarColors, size: AvatarSizes, theme: Theme) => ({
  alignItems: 'center',
  backgroundColor: getColorPrimary(theme),
  borderRadius: getSpacingBySize(size, theme),
  height: getSpacingBySize(size, theme),
  justifyContent: 'center',
  width: getSpacingBySize(size, theme),
});


const getFontSize = (theme, size) => {
  const sizeFont = {
    huge: '24px',
    large: '16px',
    small: '14px',
    standard: '16px',
    tiny: '10px',
  };

  return sizeFont[size];
};

interface AvatarImage {
  size: AvatarSizes;
  theme: Theme;
  source: any;
  type: AvatarTypes;
}

interface AvatarLetter {
  accessibilityLabel: string;
  accessibilityHint: string;
  accessibilityRole: string;
  size: AvatarSizes;
  theme: Theme;
  type: AvatarTypes;
}

const AvatarImage = styled.Image<AvatarImage>(({ size, theme }) => ({
  borderRadius: getSpacingBySize(size, theme),
  height: getSpacingBySize(size, theme),
  width: getSpacingBySize(size, theme),
}));

const AvatarLetter = styled.Text<AvatarLetter>(({ size, theme }) => ({
  alignSelf: 'center',
  color: getColorOnPrimary(theme),
  fontSize: getFontSize(theme, size),
}));

/**
 * Get the first character from first and last word
 * @param text string
 */
const getTextValue = (text) => {
  if (text.length < 3) {
    return text.toUpperCase();
  }

  // extract the first and last "first char" word
  const firstLetters = text
    .trim()
    .split(' ')
    .map(item => item[0]);

  const firstAndLast = `${firstLetters[0]}${firstLetters[firstLetters.length - 1]}`;

  return firstAndLast.toUpperCase();
};

const AvatarComponent = ({
  theme,
  size = 'standard',
  color = 'primary',
  testID = 'avatar',
  type = 'anonymous',
  text = '',
  imgSource,
  accessibilityLabel,
  accessibilityHint,
  accessibilityRole,
}: AvatarProps) => (
  <View style={getViewStyles(color, size, theme)} >
    { type === 'anonymous' && <AvatarImage
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
      type={type}
      source={IconAnonymous}
      size={size}
      theme={theme} /> }
    { type === 'image' && <AvatarImage
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      testID={testID}
      type={type}
      source={imgSource}
      size={size}
      theme={theme} /> }
    { type === 'letter' && <AvatarLetter
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole={accessibilityRole}
      size={size}
      theme={theme}
      testID={testID}
      type={type} >{getTextValue(text)}</AvatarLetter> }
  </View>
);

export const Avatar = withTheme(AvatarComponent);
