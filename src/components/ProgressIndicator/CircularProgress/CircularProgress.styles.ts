import {
  StyleSheet,
  Animated,
} from 'react-native';
import { Theme, getColorPrimary, getColorSecondary } from '../../../common/themeSelectors';

export const getLayerStyles = (size: number, rotate: Animated.AnimatedInterpolation) => ({
  height: size,
  transform: [
    {
      rotate,
    },
  ],
  width: size,
});

export const getLineLayerStyles = (color: string, theme: Theme, size: number) => ({
  borderColor: color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: size / 2,
  borderWidth: size / 10,
  height: size,
  width: size,
});

export const getContainerStyles = (size: number) => ({
  height: size / 2,
  overflow: 'hidden',
  width: size,
});

export const getLoopLayerStyles = () => ({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'center',
});
