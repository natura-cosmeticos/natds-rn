import React from 'react';
import { withTheme } from 'styled-components/native';
import { Text } from 'react-native';

import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json';
import { Theme } from '../../common/themeSelectors';

export type IconColors = 'default' | 'primary'
export type IconSizes = 'small' | 'medium'

export interface IconProps {
  /**
   * Icon name
   */
  name?: string
  /**
   * Icon variants `default` | `primary`
   */
  color?: IconColors,
  /**
   * The theme
   */
  theme: Theme,
  /**
   * Optional ID for testing
   */
  testID?: string,
  /**
   * Optional font size for the icon
   */
  size?: IconSizes,
}

const defaultIconName = 'filled-brand-naturarosacea';

const getIconSize = (theme) => theme.sizes['standard'];

const getFontColor = (theme, color) => {
  const translatedColor = {
    default: 'colorHighEmphasis',
    primary: 'colorPrimary',
  }[color];

  return theme.colorTokens[translatedColor];
};

const IconComponent = ({
  color = 'default',
  name = defaultIconName,
  testID = `icon-${name}`,
  size = 'small',
  theme,
}: IconProps) => {
  const unicodeName = iconNames[name]
    ? iconNames[name].replace('%', '\\')
    : iconNames[defaultIconName];

  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <Text
      testID={testID}
      style={{
        color: getFontColor(theme, color),
        fontFamily: 'natds-icons',
        fontSize: getIconSize(theme),
      }}
    >
      {code}
    </Text>
  );
};

export const Icon = withTheme(IconComponent);
