import React from 'react';
import { withTheme } from 'styled-components/native';
import { Text } from 'react-native';
import { icons } from '@naturacosmeticos/natds-icons';
import {
  getColorByName, getSize, getColorHighEmphasis, Theme,
} from '../../common/themeSelectors';
import { IconColors, IconProps } from './Icon.types';

const getIconColor = (theme: Theme, color: IconColors) => {
  switch (color) {
    case '#333333':
      return color;
    case 'default':
      return getColorHighEmphasis(theme);
    default:
      return getColorByName(theme, color);
  }
};

const IconComponent = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole = 'image',
  color = 'highlight',
  name = 'outlined-default-mockup',
  testID = `icon-${name}`,
  theme,
  size = 'standard',
}: IconProps) => {
  const unicodeName = icons[name].replace('%', '\\');
  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <Text
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      style={{
        color: getIconColor(theme, color),
        fontFamily: 'natds-icons',
        fontSize: getSize(theme, size),
      }}
      testID={testID}
    >
      {code}
    </Text>
  );
};

export const Icon = withTheme(IconComponent);
