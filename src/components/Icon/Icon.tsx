import React from 'react';
import { withTheme } from 'styled-components/native';
import { Text } from 'react-native';
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json';
import { ISizes } from '@naturacosmeticos/natds-styles';
import { Theme, IColors, getColorByName } from '../../common/themeSelectors';

export type IconColors = keyof IColors | 'default' | '#333333'
export type IconSizes = keyof ISizes

export interface IconProps {
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  accessibilityHint?: string,
  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element.
   * By default, the label is constructed by traversing all the children and accumulating
   * all the Text nodes separated by space.
   */
  accessibilityLabel?: string
  /**
   * Icon color tokens
   */
  color?: IconColors,
  /**
   * Icon name
   */
  name?: string
  /**
   * Icon size
   */
  size?: IconSizes
  /**
   * Optional ID for testing
   */
  testID?: string,
  /**
   * The theme
   */
  theme: Theme,
}

const defaultIconName = 'outlined-default-mockup';

const getIconSize = (theme: Theme, size: IconSizes) => theme.sizes[size];

const getFontColor = (theme: Theme, color: IconColors) => {
  const colorName = color === 'default' ? 'highEmphasis' : color;

  return getColorByName(theme, colorName);
};

const IconComponent = ({
  accessibilityHint,
  accessibilityLabel,
  color = 'default',
  name = defaultIconName,
  testID = `icon-${name}`,
  theme,
  size = 'standard',
}: IconProps) => {
  const unicodeName = iconNames[name]
    ? iconNames[name].replace('%', '\\')
    : iconNames[defaultIconName];

  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <Text
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text"
      style={{
        color: color === '#333333' ? color : getFontColor(theme, color),
        fontFamily: 'natds-icons',
        fontSize: getIconSize(theme, size),
      }}
      testID={testID}
    >
      {code}
    </Text>
  );
};

export const Icon = withTheme(IconComponent);
