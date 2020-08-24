import React from 'react';
import styled, { withTheme } from 'styled-components/native';

import { Theme } from '../../common/themeSelectors';
import { Icon } from '../Icon/Icon';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';

export type IconButtonSizes = 'small' | 'medium'
export type IconButtonColors = 'default' | 'primary'

export interface IconButtonProps {
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
   * Icon Button variants `default` | `primary`
   */
  color?: IconButtonColors,
  /**
   * The icon name
   */
  icon?: string,
  /**
   * Icon Button variants `small` | `medium`
   */
  size?: IconButtonSizes,
  /**
   * The onPress event handler
   */
  onPress: () => void,
  /**
   * Optional ID for testing
   */
  testID?: string,
  /**
   * The button theme
   */
  theme: Theme,
}

const getSpacingBySize = (theme, size) => {
  const spacing = {
    medium: 'spacingTiny',
    small: 'spacingMicro',
  }[size];

  return theme.spacing[spacing];
};

const circleBorderRadius = 50;

interface IconContainerProps {
  size: IconButtonSizes,
  theme: Theme,
}

const IconContainer = styled.View<IconContainerProps>`
  padding: ${({ theme, size }) => getSpacingBySize(theme, size)}px;
  borderRadius: ${circleBorderRadius}px;
`;

const getIconSize = theme => theme.sizes.standard;

const getRippleColor = (color) => {
  const colorMapping = { default: 'highlight', primary: 'primary' };

  return colorMapping[color];
};

const IconButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  color,
  icon,
  size = 'small',
  onPress,
  testID,
  theme,
}: IconButtonProps) => (
  <TouchableRipple
    color={getRippleColor(color)}
    size={getIconSize(theme)}
    onPress={onPress}
    testID={testID}
  >
    <IconContainer size={size} theme={theme}>
      <Icon
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        color={color}
        name={icon}
        theme={theme}
      />
    </IconContainer>
  </TouchableRipple>
);

export const IconButton = withTheme(IconButtonComponent);
