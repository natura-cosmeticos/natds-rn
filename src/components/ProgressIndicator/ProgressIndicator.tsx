import React from 'react';
import { withTheme } from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { getSize } from '../../common/themeSelectors';
import { CircularProgress } from './CircularProgress/CircularProgress';

export type ProgressIndicatorSizes = 'standard' | 'semi' | 'medium' | 'large';

export interface ProgressIndicatorProps {
  /**
   * Size to be used on circular progress
   */
  size?: ProgressIndicatorSizes;
  /**
   * Default theme
  */
  theme: Theme;
}

export const ProgressIndicatorComponent = ({
  size = 'medium',
  theme,
}: ProgressIndicatorProps) => (
  <CircularProgress size={getSize(theme, size)} />
);

export const ProgressIndicator = React.memo(
  withTheme(ProgressIndicatorComponent),
);
