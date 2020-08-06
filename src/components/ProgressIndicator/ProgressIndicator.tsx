import React from 'react';
import { tokens } from '@naturacosmeticos/natds-styles';

import { CircularProgress } from './CircularProgress/CircularProgress';

export type ProgressIndicatorVariants = 'circular';
export type ProgressIndicatorColors = 'primary' | 'secondary';
export type ProgressIndicatorTypes = 'indeterminated';

export interface ProgressIndicatorProps {
  /**
  * Variant of the progress indicator: `circular`
  */
  variant: 'circular';
  /**
  * Color of the progress indicator: `primary` | `secondary`
  */
  color?: ProgressIndicatorColors;
  /**
  *  Type of the progress indicator: `indeterminated`
  */
  type?: ProgressIndicatorTypes,
  /**
   * Size to be used on circular progress
   */
  size?: number;
}

export const ProgressIndicator = ({
  variant,
  color = 'primary',
  type = 'indeterminated',
  size = tokens.sizes.standard,
}: ProgressIndicatorProps) => {
  if (type !== 'indeterminated' || variant !== 'circular') {
    throw new Error('Not implemented yet');
  }

  return (
    <CircularProgress
      size={size}
      color={color}
    />
  );
};
