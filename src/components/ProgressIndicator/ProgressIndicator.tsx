import React from 'react';
import { View } from 'react-native';
import { withTheme } from 'styled-components/native';

import { Theme } from '../../common/themeSelectors';
import { CircularProgress } from './CircularProgress/CircularProgress';

export interface ProgressIndicatorProps {
  /**
  * Variant of the progress indicator: `circular`
  */
  variant: 'circular';
  /**
  * Color of the progress indicator: `primary` | `secondary`
  */
  color: 'primary' | 'secondary';
  /**
  *  Type of the progress indicator: `indeterminated`
  */
  type: 'indeterminated',
  /**
   * Size to be used on circular progress
   */
  size?: number;
  /**
   * Theme to be used on progress indicator
   */
  theme: Theme;
}

const ProgressIndicatorComponent = ({
  variant,
  color,
  type,
  size,
}: ProgressIndicatorProps) => {
  if (type !== 'indeterminated' || variant !== 'circular') {
    throw new Error('Not implemented yet');
  }

  return (
    <View>
      <CircularProgress
        size={size}
        color={color}
      />
    </View>
  );
};

const ProgressIndicator = withTheme(ProgressIndicatorComponent);

export { ProgressIndicator };
