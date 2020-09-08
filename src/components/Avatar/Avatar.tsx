/* eslint-disable max-lines */
import React from 'react';
import { View, ViewStyle } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import { IAvatarSizes } from '@naturacosmeticos/natds-styles';
// @ts-ignore
import IconAnonymous from '../../assets/images/anonymous.jpg';

import {
  Theme,
  getColorOnPrimary,
  getColorPrimary,
  getSpacingBySize,
  getAvatarBySize,
} from '../../common/themeSelectors';

export type AvatarSizes = keyof IAvatarSizes;
export type AvatarTypes = 'image' | 'letter' | 'anonymous';


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
   * Optional ID for testing
   */
  testID?: string;
}

const getAvatarFontSize = (theme, size) => getAvatarBySize(size, theme).fontSize;

const getAvatarSize = (theme, size) => getAvatarBySize(size, theme).size;

const getViewStyles = (size: AvatarSizes, theme: Theme):ViewStyle => ({
  alignItems: 'center',
  backgroundColor: getColorPrimary(theme),
  borderRadius: getAvatarSize(theme, size),
  height: getAvatarSize(theme, size),
  justifyContent: 'center',
  width: getAvatarSize(theme, size),
});


interface AvatarImage {
  size: AvatarSizes;
  theme: Theme;
  source: any;
  type: AvatarTypes;
}

interface AvatarLetter {
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityRole?: string;
  size: AvatarSizes;
  theme: Theme;
  type: AvatarTypes;
}

const AvatarImage = styled.Image<AvatarImage>(({ size, theme }) => ({
  borderRadius: getSpacingBySize(size, theme),
  height: getAvatarSize(theme, size),
  width: getAvatarSize(theme, size),
}));

const AvatarLetter = styled.Text<AvatarLetter>`
  color: ${({ theme }) => getColorOnPrimary(theme)};
  font-size: ${({ size, theme }) => getAvatarFontSize(theme, size)};
  align-self: center;
  letter-spacing: 1px;
`;

/**
 * Get the first character from first and last word
 * @param text string
 */
const getTextValue = (text) => {
  const textFormated = text.trim().toUpperCase();

  if (textFormated.length < 3) {
    return textFormated;
  }

  if (!textFormated.includes(' ')) {
    return `${textFormated.charAt(0)}${textFormated.charAt(textFormated.length - 1)}`;
  }

  const firstLetters = textFormated
    .trim()
    .split(' ')
    .map(item => item.charAt(0))
    .join();

  return `${firstLetters.charAt(0)}${firstLetters.charAt(firstLetters.length - 1)}`;
};

const AvatarComponent = ({
  theme,
  size = 'standard',
  testID = 'avatar',
  type = 'anonymous',
  text = '',
  imgSource,
  accessibilityLabel,
  accessibilityHint,
}: AvatarProps) => (
  <View style={getViewStyles(size, theme)} >
    { type === 'letter'
      ? (
        <AvatarLetter
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole="text"
          size={size}
          theme={theme}
          testID={testID}
          type={type} >{getTextValue(text)}</AvatarLetter>
      ) : (
        <AvatarImage
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          testID={testID}
          type={type}
          source={type === 'image' ? imgSource : IconAnonymous}
          size={size}
          theme={theme} />
      )
    }
  </View>
);

export const Avatar = withTheme(AvatarComponent);
