import React from 'react';
import { Animated } from 'react-native';
import { withTheme } from 'styled-components/native';

import { Theme } from '../../../common/themeSelectors';
import {
  getLayerStyles, getLineLayerStyles, getContainerStyles, getLoopLayerStyles, getRootStyles,
} from './CircularProgress.styles';

export interface CircularProgressIndicatorProps {
  size: number;
  color: string;
  timer: Animated.Value;
  theme: Theme;
}

const CircularIndicatorComponent = ({
  size, color, timer, theme,
}: CircularProgressIndicatorProps) => {
  const minCircularRange = '45deg';
  const maxCircularRange = '765deg';

  const rootStyles = getRootStyles(size);
  const loopLayerStyles = getLoopLayerStyles();
  const layerStyle = getLayerStyles(size, timer.interpolate({
    inputRange: [0, 1],
    outputRange: [
      minCircularRange,
      maxCircularRange,
    ],
  }));
  const containerStyle = getContainerStyles(size);
  const lineStyle = getLineLayerStyles(color, theme, size);

  return (
    <Animated.View
      style={rootStyles}
      collapsable={false}
    >
      <Animated.View style={loopLayerStyles}>
        <Animated.View style={layerStyle}>
          <Animated.View
            style={containerStyle}
            collapsable={false}
          >
            <Animated.View style={containerStyle} collapsable={false}>
              <Animated.View style={lineStyle} />
            </Animated.View>
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </Animated.View>
  );
};

const CircularIndicator = withTheme(CircularIndicatorComponent);

export { CircularIndicator };
