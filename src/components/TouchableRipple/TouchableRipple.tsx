/* eslint-disable max-statements, max-lines, no-underscore-dangle */

import React, { ReactElement } from 'react';
import { TouchableHighlight, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from 'styled-components/native';
import { getColorLowEmphasis, Theme } from '../../common/themeSelectors';

export type TouchableRippleColors = 'primary' | 'secondary' | 'highlight';

export interface TouchableRippleProps {
  /**
   * Children component
   */
  children?: ReactElement;
  /**
   * Ripple color: `primary` | `secondary` | `highlight`
   * @default: `primary`
   */
  color?: TouchableRippleColors;
  /*
   * Deactivates the palpable effect, will not call the callback function when pressing;
   */
  disabled?: boolean;
  /**
   * Controls if the ripple should overflow the content of not
   */
  hideOverflow?: boolean;
  /**
   * Size of the children, the ripple will have the double of this size.
   */
  size?: number;
  /**
   * Will be called as soon the ripple animation start
   */
  onPress?: () => void;
  /**
   * Optional testID
   */
  testID?: string;
  /**
   * App's theme
   */
  theme?: Theme;
  /**
   *
   */
  style?: StyleProp<ViewStyle>
}


export const TouchableRipple = ({
  children,
  disabled = false,
  onPress,
  testID = 'touchable-ripple',
  style,
}: TouchableRippleProps) => {
  const theme = useTheme();

  return (
    <TouchableHighlight
      style={style}
      underlayColor={getColorLowEmphasis(theme)}
      disabled={disabled}
      onPress={onPress}
      testID={testID}
    >
      {children}
    </TouchableHighlight>
  );
};
