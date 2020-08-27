import React from 'react';
import { withTheme } from 'styled-components/native';
import { Text } from 'react-native';

import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json';
import { Theme } from '../../common/themeSelectors';

export type IconColors = 'default' | 'primary'
export type IconSizes = 'micro' | 'tiny' | 'small' | 'standard' | 'medium' | 'large' | 'largex' | 'largexx' | 'huge' | 'hugex' | 'hugexx'

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
   * Icon variants `default` | `primary`
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

const getIconSize = (theme, size) => theme.sizes[size];

const getFontColor = (theme, color) => {
  const translatedColor = {
    default: 'colorHighEmphasis',
    primary: 'colorPrimary',
  }[color];

  return theme.colorTokens[translatedColor];
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
        color: getFontColor(theme, color),
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
