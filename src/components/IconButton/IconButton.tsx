import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { Icon } from '../Icon/Icon';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { getSize } from '../../common/themeSelectors';
import { IconButtonProps, IconContainerProps } from './IconButton.types';
import {
  getContainerElevation,
  getIconColor,
  getIconSize,
  getContainerBackgroundColor,
} from './IconButton.helpers';

export const IconContainer = styled.View<IconContainerProps>`
  height: ${({ size, theme }) => getSize(theme, size)}px;
  width: ${({ size, theme }) => getSize(theme, size)}px;
  background-color: ${({ backgroundStyle, disabled, theme }) => getContainerBackgroundColor({ backgroundStyle, disabled, theme })};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

export const IconButton = ({
  accessibilityHint,
  accessibilityLabel,
  color = 'highEmphasis',
  iconColor = color,
  icon,
  size = 'semi',
  backgroundStyle = 'none',
  disabled = false,
  onPress,
  testID = 'icon-button',
}: IconButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableRipple
      color="highlight"
      size={getSize(theme, size) / 2 + 5}
      onPress={disabled ? undefined : onPress}
      testID={testID}
    >
      <IconContainer
        disabled={disabled}
        size={size}
        backgroundStyle={backgroundStyle}
        style={getContainerElevation(backgroundStyle, theme)}
        testID={`${testID}-background`}
      >
        <Icon
          accessibilityHint={accessibilityHint}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="imagebutton"
          size={getIconSize(size)}
          color={getIconColor(iconColor, disabled)}
          name={icon}
          testID={`${testID}-icon`}
        />
      </IconContainer>
    </TouchableRipple>
  );
};
