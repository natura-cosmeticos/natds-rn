import React from 'react';
import styled, { withTheme } from 'styled-components/native';

import {
  getColorMediumEmphasis,
  getButtonPropsBySize,
  getShadowBySize,
  getColorLowEmphasis,
  getColorPrimary,
  getColorPrimaryLight,
  getOpacity10,
} from '../themeSelectors';

interface ButtonBase {
  type: ButtonTypes
  disabled: boolean
  theme: Theme
}

const isContained = (type: ButtonTypes) => type === 'contained';

const getButtonStyles = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
  const styles = {
    contained: {
      background: disabled ? getColorLowEmphasis(theme) : getColorPrimary(theme),
    },
    outlined: {
      borderColor: disabled ? getColorMediumEmphasis(theme) : getColorPrimary(theme),
      borderWidth: 1,
    },
  };

  return styles[type];
};

const ButtonBase = styled.TouchableHighlight<ButtonBase>(({
  type,
  theme,
  borderRadius,
  size = 'medium',
  disabled = false,
}) => ({
  borderRadius,
  ...getButtonStyles(theme, type, disabled),
  ...getButtonPropsBySize(theme, size),
}));

const getShadowByType = (type: ButtonTypes, disabled: boolean, theme: Theme) => (
  isContained(type) && !disabled
    ? getShadowBySize(theme, '2')
    : {}
);

const ButtonStructure = ({
  children,
  type,
  onPress,
  theme,
  borderRadius,
  testID = 'button',
  disabled = false,
}) => (
  <ButtonBase
    testID={testID}
    type={type}
    onPress={disabled ? () => {} : onPress}
    borderRadius={borderRadius}
    underlayColor={getColorPrimaryLight(theme)}
    style={getShadowByType(type, disabled, theme)}
    activeOpacity={getOpacity10(theme)}
    disabled={disabled}
  >
    {children}
  </ButtonBase>
);

export default withTheme(ButtonStructure);
