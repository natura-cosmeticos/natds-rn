import React from 'react';
import { tokens } from '@naturacosmeticos/natds-styles';

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
}

export const ProgressIndicatorComponent = ({
  variant,
  color = 'primary',
  type = 'indeterminate',
  size = tokens.sizes.standard,
}: ProgressIndicatorProps) => {
  if (type !== 'indeterminate' || variant !== 'circular') {
    throw new Error('Not implemented yet');
  }

  return (
    <CircularProgress
      size={size}
      color={color}
    />
  );
};

export const ProgressIndicator = React.memo(ProgressIndicatorComponent);
