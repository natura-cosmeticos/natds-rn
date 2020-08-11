import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import {
  getColorMediumEmphasis,
  getButtonPropsBySize,
  getShadowBySize,
  getColorLowEmphasis,
  getColorPrimary,
  getOpacity10,
  Theme,
  getColorPrimaryLight,
} from '../themeSelectors';

export type ButtonTypes = 'contained' | 'outlined' | 'text'
type AccessibilityRole = 'button'

export interface ButtonStructureInterface {
  testID: string
  type: ButtonTypes
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
  borderRadius: number
  disabled: boolean
  accessibilityRole: AccessibilityRole
  accessibilityLabel: string
  accessibilityHint: string
  underlayColor: string
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

const ButtonBase = styled.TouchableHighlight<ButtonStructureInterface>(({
  type,
  theme,
  borderRadius,
  disabled = false,
}) => ({
  borderRadius,
  ...getButtonStyles(theme, type, disabled),
  ...getButtonPropsBySize(theme, 'medium'),
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
  accessibilityLabel,
  accessibilityHint,
}) => (
  <ButtonBase
    testID={testID}
    type={type}
    onPress={disabled ? () => {} : onPress}
    borderRadius={borderRadius}
    style={getShadowByType(type, disabled, theme)}
    activeOpacity={getOpacity10(theme)}
    disabled={disabled}
    accessibilityRole="button"
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
    underlayColor={getColorPrimaryLight(theme)}
  >
    {children}
  </ButtonBase>
);

export default withTheme(ButtonStructure);
