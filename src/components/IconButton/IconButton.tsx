import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent, View } from 'react-native';

import ButtonStructure from '../../common/ButtonStructure/index';
import { Theme } from '../../common/themeSelectors';
import { Icon } from '../Icon/Icon';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';

export type IconButtonSizes = 'small' | 'medium'
export type IconButtonColors = 'default' | 'primary'

export interface IconButtonProps {
  /**
   * The onPress event handler
   */
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void,
  /**
   * The icon name
   */
  icon?: string,
  /**
   * Icon Button variants `small` | `medium`
   */
  size?: IconButtonSizes,
  /**
   * The button theme
   */
  theme: Theme,
  /**
   * Icon Button variants `default` | `primary`
   */
  color?: IconButtonColors,
  /**
   * Optional ID for testing
   */
  testID?: string,
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
}

const IconButtonContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const getSpacingBySize = (theme, size) => {
  const spacing = {
    medium: 'spacingTiny',
    small: 'spacingMicro',
  }[size];

  return theme.spacing[spacing];
};

interface IconContainerProps {
  theme: Theme,
  size: IconButtonSizes,
}

const IconContainer = styled.View<IconContainerProps>`
  padding: ${({ theme, size }) => getSpacingBySize(theme, size)}px;
  borderRadius: 50;
`;

const getIconSize = theme => theme.sizes.standard;

const IconButtonComponent = ({
  icon,
  color,
  onPress,
  theme,
  testID,
  size = 'small',
}: IconButtonProps) => (
  <TouchableRipple
    size={getIconSize(theme)}
    onPress={onPress}
    testID={testID}
  >
    <IconContainer theme={theme} size={size}>
      <Icon name={icon} color={color} theme={theme} />
    </IconContainer>
  </TouchableRipple>
);

export const IconButton = withTheme(IconButtonComponent);
