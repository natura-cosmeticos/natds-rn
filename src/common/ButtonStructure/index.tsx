import React from 'react';
import styled, { withTheme } from 'styled-components/native';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';
import {
  getButtonPropsBySize,
  getOpacity10,
  Theme,
  getColorPrimaryLight,
} from '../themeSelectors';

export type AccessibilityRole = 'button'

interface Dictionary<T> {
  [Key: string]: T;
}

export interface IButtonStructure {
  children: React.ReactNode
  type: string
  testID: string
  theme: Theme
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void
  borderRadius: number
  disabled: boolean
  accessibilityRole: AccessibilityRole
  accessibilityLabel: string
  accessibilityHint: string
  underlayColor: string
  styles: Dictionary<string>
}

const ButtonBase = styled.TouchableHighlight<IButtonStructure>(({
  theme,
  borderRadius,
  styles,
}) => ({
  borderRadius,
  ...styles,
  ...getButtonPropsBySize(theme, 'medium'),
}));

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
  styles,
}) => (
  <ButtonBase
    type={type}
    testID={testID}
    onPress={disabled ? () => {} : onPress}
    borderRadius={borderRadius}
    styles={styles}
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
