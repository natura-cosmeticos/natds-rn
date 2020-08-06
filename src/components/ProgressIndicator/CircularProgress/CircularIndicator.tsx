import React from 'react';
import { Animated } from 'react-native';
import { withTheme } from 'styled-components/native';

import { Theme } from '../../../common/themeSelectors';
import {
  Root,
  Loop,
  Layer,
  Container,
  Line,
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

  const layerStyle = {
    transform: [
      {
        rotate: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [
            minCircularRange,
            maxCircularRange,
          ],
        }),
      },
    ],
  };

  return (
    <Root as={Animated.View} size={size}>
      <Loop as={Animated.View}>
        <Layer
          as={Animated.View}
          size={size}
          style={layerStyle}
        >
          <Container as={Animated.View} size={size}>
            <Line
              as={Animated.View}
              color={color}
              size={size}
              theme={theme}
            />
          </Container>
        </Layer>
      </Loop>
    </Root >
  );
};

const CircularIndicator = withTheme(CircularIndicatorComponent);

export { CircularIndicator };
