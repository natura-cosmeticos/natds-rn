import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Platform,
} from 'react-native';

import { ProgressIndicatorColors } from '../ProgressIndicator';
import {
  Root,
  Loop,
  Layer,
  Container,
  Line,
} from './CircularProgress.styles';

export interface CircularProgressProps {
  size: number;
  color: ProgressIndicatorColors;
}

export const CircularProgress = ({
  size,
  color,
}: CircularProgressProps) => {
  /**
   * Duration specify how much the circle will take to make a 360deg loop around itself,
   * decrease it will speed up the animation speed and increase will slow the animation speed
   * The default speed is 1 second per loop
   */
  const duration = 1000;
  /**
   * This animation/Animated.timing, is responsible for looping the border around the view.
   */
  const timer = useRef(new Animated.Value(0)).current;
  const rotation = Animated.timing(timer, {
    duration,
    easing: Easing.linear,
    isInteraction: false,
    toValue: 1,
    useNativeDriver: Platform.OS !== 'web',
  });
  /**
 * The rotate animation will take from 0deg to 360deg to make a full loop around itself
 */
  const fullCircularRange = 360;
  const minCircularRange = '0deg';
  const maxCircularRange = `${fullCircularRange}deg`;
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

  /**
   * Loop rotation animation continuously,
   * each time it reaches the end, it resets and begins again from the start.
   */
  function startRotation(): void {
    timer.setValue(0);
    Animated.loop(rotation).start();
  }

  /**
   * Reset the timer and loop the animation again on each update
   */
  useEffect(() => {
    startRotation();
  }, []);

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
            />
          </Container>
        </Layer>
      </Loop>
    </Root>
  );
};
