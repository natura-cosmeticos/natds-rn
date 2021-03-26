import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { Icon, IconColors } from '../Icon/Icon';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import {
  getSize,
  getColorByName,
  buildColorWithOpacity,
  getColorHighlight,
  getOpacityVeryHigh,
  getShadowBySize,
  Theme,
} from '../../common/themeSelectors';
import {
  IconButtonColors,
  IconButtonProps,
  IconContainerProps,
  IconButtonBackgroundStyle,
  IconButtonSizes,
} from './IconButton.types';

const getBackgroundColor = ({
  theme,
  backgroundStyle,
  disabled,
}: IconContainerProps) => {
  const float = disabled
    ? getColorByName(theme, 'lowEmphasis')
    : getColorByName(theme, 'surface');

  const backgroundColor = {
    float,
    none: 'transparent',
    overlay: buildColorWithOpacity(getColorHighlight, getOpacityVeryHigh, theme),
  };

  return backgroundColor[backgroundStyle];
};

const getIconSize = (theme: Theme, size: IconButtonSizes) => {
  const iconSize = {
    medium: 'semiX',
    semi: 'standard',
    semiX: 'semi',
  };

  return iconSize[size];
};

const IconContainer = styled.View<IconContainerProps>`
  height: ${({ size, theme }) => getSize(theme, size)}px;
  width: ${({ size, theme }) => getSize(theme, size)}px;
  background-color: ${getBackgroundColor};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const getIconColor = (color: IconButtonColors, disabled: boolean) => {
  const highEmphasis = disabled ? 'mediumEmphasis' : 'highEmphasis';

  const colorMapping = {
    default: highEmphasis,
    highEmphasis,
    light: disabled ? 'lowEmphasis' : 'surface',
    primary: disabled ? 'mediumEmphasis' : 'primary',
  };

  return colorMapping[color] as IconColors;
};

const getElevation = (
  backgroundStyle: IconButtonBackgroundStyle,
  theme: Theme,
) => (
  backgroundStyle === 'float'
    ? getShadowBySize(theme, 'micro')
    : {}
);

const IconButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  color = 'highEmphasis',
  iconColor = color,
  icon,
  size = 'semi',
  backgroundStyle = 'none',
  disabled = false,
  onPress,
  testID,
  theme,
}: IconButtonProps) => (
  <TouchableRipple
    color="highlight"
    size={getSize(theme, size) / 2 + 5}
    onPress={disabled ? undefined : onPress}
    testID={testID}
  >
    <IconContainer
      disabled={disabled}
      size={size}
      theme={theme}
      backgroundStyle={backgroundStyle}
      style={getElevation(backgroundStyle, theme)}
    >
      <Icon
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        size={getIconSize(theme, size)}
        color={getIconColor(iconColor, disabled)}
        name={icon}
        theme={theme}
      />
    </IconContainer>
  </TouchableRipple>
);

export const IconButton = withTheme(IconButtonComponent);
