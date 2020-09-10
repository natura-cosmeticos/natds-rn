import React from 'react';
import { withTheme } from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { getSize } from '../../common/themeSelectors';
import { CircularProgress } from './CircularProgress/CircularProgress';

export type ProgressIndicatorVariants = 'circular';
export type ProgressIndicatorColors = 'primary' | 'secondary';
export type ProgressIndicatorTypes = 'indeterminate';

export interface ProgressIndicatorProps {
  /**
  * Variant of the progress indicator: `circular`
  */
  variant: ProgressIndicatorVariants;
  /**
  * Color of the progress indicator: `primary` | `secondary`
  */
  color?: ProgressIndicatorColors;
  /**
  *  Type of the progress indicator: `indeterminate`
  */
  type?: ProgressIndicatorTypes,
  /**
   * Size to be used on circular progress
   */
  size?: number;
  theme: Theme
}

export const ProgressIndicatorComponent = ({
  variant,
  color = 'primary',
  type = 'indeterminate',
  size,
  theme,
}: ProgressIndicatorProps) => {
  if (type !== 'indeterminate' || variant !== 'circular') {
    throw new Error('Not implemented yet');
  }

  return (
    <CircularProgress
      size={size || getSize(theme, 'standard')}
      color={color}
    />
  );
};

export const ProgressIndicator = React.memo(withTheme(ProgressIndicatorComponent));
