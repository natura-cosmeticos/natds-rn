import React from 'react';
import { withTheme } from 'styled-components';
import { NativeSyntheticEvent, NativeTouchEvent, TouchableHighlight } from 'react-native';
import { getOpacity10, Theme, getColorPrimaryLight } from '../themeSelectors';

interface Dictionary<T> {
  [Key: string]: T;
}

export interface ButtonStructureProps {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  children: React.ReactNode;
  disabled?: boolean;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  style?: Dictionary<string>;
  testID?: string;
  theme: Theme;
}

const ButtonStructure: React.FC<ButtonStructureProps> = ({
  accessibilityHint,
  accessibilityLabel,
  children,
  disabled = false,
  onPress,
  style,
  testID = 'button',
  theme,
}) => (
  <TouchableHighlight
    accessibilityHint={accessibilityHint}
    accessibilityLabel={accessibilityLabel}
    accessibilityRole="button"
    activeOpacity={getOpacity10(theme)}
    disabled={disabled}
    onPress={onPress}
    style={style}
    testID={testID}
    underlayColor={getColorPrimaryLight(theme)}>
    {children}
  </TouchableHighlight>
);

export default withTheme(ButtonStructure);
