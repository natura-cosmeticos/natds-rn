import React from 'react';
import { View } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import {
  Theme,
  getColorLowEmphasis,
  getSpacingStandard,
  getSpacingNone,
} from '../../common/themeSelectors';

export type DividerTypes = 'fullBleed' | 'inset' | 'middle';

export interface DividerProps {
  /**
   * Divider variants `fullBleed` | `inset` | `middle`
   */
  type?: DividerTypes;
  /**
   * The divider theme
   */
  theme: Theme;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

interface DividerBase {
  type: DividerTypes;
  theme: Theme;
}

const getViewStyles = (type: DividerTypes, theme: Theme) => {
  const styles = {
    inset: {
      marginLeft: getSpacingStandard(theme),
    },
    middle: {
      marginLeft: getSpacingStandard(theme),
      marginRight: getSpacingStandard(theme),
    },
  };

  return styles[type];
};

const DividerBase = styled.View<DividerBase>(({ theme }) => ({
  backgroundColor: getColorLowEmphasis(theme),
  height: 1,
  margin: getSpacingNone(theme),
  width: '100%',
}));

const DividerComponent = ({
  theme,
  type = 'fullBleed',
  testID = 'divider',
}: DividerProps) => (
  <View style={getViewStyles(type, theme)}>
    <DividerBase type={type} testID={testID} />
  </View>
);

export const Divider = withTheme(DividerComponent);
