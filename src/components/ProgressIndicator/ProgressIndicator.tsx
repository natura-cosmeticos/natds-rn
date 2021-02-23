import React, { useEffect, useRef } from 'react';
import { withTheme } from 'styled-components/native';
import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { Animated, Easing, Platform } from 'react-native';
import {
  Container, Layer, Line, Loop, View,
} from './ProgressIndicator.styles';
import { getSize } from '../../common/themeSelectors';

export type ProgressIndicatorSizes = 'standard' | 'semi' | 'medium' | 'large';

export interface ProgressIndicatorProps {
  /**
   * Size to be used on progress indicator
   */
  size?: ProgressIndicatorSizes;
  /**
   * Show a layer behind the progress indicator
   */
  showLayer?: boolean;
  /**
   * Default theme
   */
  theme: Theme;
}

export const ProgressIndicatorComponent = ({
  size = 'medium',
  showLayer = false,
  theme,
}: ProgressIndicatorProps) => {
  /**
   * Duration specify how much the circle will take to make a 720deg loop around itself,
   * decrease it will speed up the animation speed and increase will slow the animation speed
   * The default speed is 1.4 second per loop
   */
  const duration = 1300;
  /**
   * This animation/Animated.timing, is responsible for looping the border around the view.
   */
  const timer = useRef(new Animated.Value(0)).current;
  const rotation = Animated.timing(timer, {
    duration,
    easing: Easing.inOut(Easing.quad),
    isInteraction: false,
    toValue: 1,
    useNativeDriver: Platform.OS !== 'web',
  });
  /**
   * The rotate animation will take from 0deg to 720deg to make a full loop around itself
   */
  const minCircularRange = '0deg';
  const maxCircularRange = '720deg';

  const layerStyle = {
    transform: [
      {
        rotate: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [minCircularRange, maxCircularRange],
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
    <View size={getSize(theme, size)} showLayer={showLayer}>
      <Layer as={Animated.View} size={getSize(theme, size)}>
        <Loop as={Animated.View}>
          <Layer as={Animated.View} size={getSize(theme, size)} style={layerStyle}>
            <Container as={Animated.View} size={getSize(theme, size)}>
              <Line as={Animated.View} size={getSize(theme, size)} />
            </Container>
          </Layer>
        </Loop>
      </Layer>
    </View>
  );
};

export const ProgressIndicator = React.memo(
  withTheme(ProgressIndicatorComponent),
);
