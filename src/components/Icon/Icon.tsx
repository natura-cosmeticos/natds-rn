import React from 'react';
import { withTheme } from 'styled-components/native';
import { AccessibilityRole, Text } from 'react-native';
import { IconName, icons } from '@naturacosmeticos/natds-icons';
import { Size, Theme, Color } from '@naturacosmeticos/natds-themes/react-native';
import { getColorByName, getSize } from '../../common/themeSelectors';

export type IconColors = keyof Color | '#333333'
export type IconSizes = keyof Size

export interface IconProps {
  /**
   * An accessibility hint helps users understand what will happen when they perform an action
   * on the accessibility element when that result is not clear from the accessibility label.
   */
  accessibilityHint?: string
  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element.
   * By default, the label is constructed by traversing all the children and accumulating
   * all the Text nodes separated by space.
   */
  accessibilityLabel?: string
  /**
   * Communicates the purpose of a component to the user of an assistive technology
   */
  accessibilityRole?: AccessibilityRole
  /**
   * Icon color tokens
   */
  color?: IconColors
  /**
   * Icon name
   */
  name?: IconName
  /**
   * Icon size
   */
  size?: IconSizes
  /**
   * Optional ID for testing
   */
  testID?: string
  /**
   * The theme
   */
  theme: Theme
}

const defaultIconName = 'outlined-default-mockup';
const defaulColor = 'highlight';

const IconComponent = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole = 'image',
  color = defaulColor,
  name = defaultIconName,
  testID = `icon-${name}`,
  theme,
  size = 'standard',
}: IconProps) => {
  const unicodeName = icons[name]
    ? icons[name].replace('%', '\\')
    : icons[defaultIconName];

  const code = JSON.parse(`["${unicodeName}"]`)[0];

  return (
    <Text
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      style={{
        color: color === '#333333' ? color : getColorByName(theme, color),
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
