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
}

const defaultIconName = 'outlined-default-mockup';

const getIconSize = theme => theme.sizes.standard;

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
  theme,
  accessibilityHint,
  accessibilityLabel,
}: IconProps) => {
  const unicodeName = iconNames[name]
    ? iconNames[name].replace('%', '\\')
    : iconNames[defaultIconName];

  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <Text
      testID={testID}
      accessibilityRole="text"
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
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
