import React from 'react';
import { Animated } from 'react-native';

import { withTheme } from 'styled-components/native';
import {
  getLayerStyles, getLineLayerStyles, getContainerStyles, getLoopLayerStyles,
} from './CircularProgress.styles';
import { Theme } from '../../../common/themeSelectors';

export interface CircularProgessIndicatorProps {
  size: number;
  color: string;
  timer: Animated.Value;
  theme: Theme;
}

const CircularIndicatorComponent = ({
  size, color, timer, theme,
}: CircularProgessIndicatorProps) => {
  const minCircularRange = '45deg';
  const maxCircularRange = '765deg';

  const layerStyle = getLayerStyles(size, timer.interpolate({
    inputRange: [0, 1],
    outputRange: [
      minCircularRange,
      maxCircularRange,
    ],
  }));
  const containerStyle = getContainerStyles(size);
  const lineStyle = getLineLayerStyles(color, theme, size);
  const loopLayerStyles = getLoopLayerStyles();

  return (
    <Animated.View
      style={[{ height: size, width: size }]}
      collapsable={false}
    >
      <Animated.View style={loopLayerStyles}>
        <Animated.View style={layerStyle}>
          <Animated.View
            style={[containerStyle]}
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
