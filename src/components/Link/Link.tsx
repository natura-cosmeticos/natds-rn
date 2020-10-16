import React, { ReactNode } from 'react';
import { withTheme } from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  Text,
  TouchableOpacity,
} from 'react-native';
import { getColorLink } from '../../common/themeSelectors';

export type LinkTypes = 'standard' | 'underline';

export interface LinkProps {
  /**
   * The content of the link
   */
  children: ReactNode;
  /**
   * The onPress event handler
   */
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  /**
   * DefaultTheme
   */
  theme: Theme;
  /**
   * Optional ID for testing
   */
  testID?: string;
  /**
   * Controls when the link should have an underline.
   */
  type?: LinkTypes;
}

const LinkComponent = ({
  children,
  onPress,
  testID,
  theme,
  type = 'standard',
}: LinkProps) => (
  <TouchableOpacity>
    <Text
      onPress={onPress}
      style={{
        color: getColorLink(theme),
        textDecorationLine: type === 'underline' ? 'underline' : 'none',
      }}
      testID={testID}>
      {children}
    </Text>
  </TouchableOpacity>
);

export const Link = withTheme(LinkComponent);
