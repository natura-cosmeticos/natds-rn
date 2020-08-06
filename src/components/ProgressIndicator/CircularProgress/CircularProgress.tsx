import React, { useEffect } from 'react';
import {
  Animated,
  Easing,
  Platform,
} from 'react-native';
import { tokens } from '@naturacosmeticos/natds-styles';
import { withTheme } from 'styled-components/native';

import { CircularIndicator } from './CircularIndicator';

export interface CircularProgressProps {
  size?: number;
  color: string;
 }

const CircularProgressComponent = ({
  size = tokens.sizes.standard,
  color,
}: CircularProgressProps) => {
  const duration = 2000;
  const timer = new Animated.Value(0);
  const rotation = Animated.timing(timer, {
    duration,
    easing: Easing.linear,
    isInteraction: false,
    toValue: 1,
    useNativeDriver: Platform.OS !== 'web',
  });

  function startRotation(): void {
    timer.setValue(0);
    Animated.loop(rotation).start();
  }

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

const CircularProgress = withTheme(CircularProgressComponent);

export { CircularProgress };
