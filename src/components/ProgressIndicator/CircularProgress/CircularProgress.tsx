import React, { useEffect, useState } from 'react';
import {
  Animated,
  Easing,
  Platform,
} from 'react-native';
import { withTheme } from 'styled-components/native';

import { CircularIndicator } from './CircularIndicator';

export interface CircularProgressProps {
  size: number;
  color: string;
}

const CircularProgressComponent = ({
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
  const timer = new Animated.Value(0);
  const rotation = Animated.timing(timer, {
    duration,
    easing: Easing.linear,
    isInteraction: false,
    toValue: 1,
    useNativeDriver: Platform.OS !== 'web',
  });

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
  });

  return (
    <CircularIndicator
      color={color}
      size={size}
      timer={timer}
    />
  );
};

export const CircularProgress = withTheme(CircularProgressComponent);
