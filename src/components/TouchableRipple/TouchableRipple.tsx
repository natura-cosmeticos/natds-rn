import React, { ReactElement, useRef } from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  Easing,
  View,
  Platform,
} from 'react-native';

import { Container, Ripple } from './TouchableRipple.styles';

export type TouchableRippleColors = 'primary' | 'secondary';

export interface TouchableRippleProps {
  /**
   * Size of the children, the ripple will have the double of this size.
   */
  size: number;
  /**
   * Ripple color: `primary` | `secondary`
   */
  color?: TouchableRippleColors;
  /**
   * Will be called as soon the ripple animation start
   */
  onPress?: () => void;
  /*
  * Deactivates the palpable effect, will not call the callback function when pressing;
  */
  disabled?: boolean;
  /**
   * Optional testID
   */
  testID?: string;
  /**
   * Children component
   */
  children: ReactElement;
}

/**
  * This component makes a ripple effect with the react native Animated API
  * working on the same way both on android/ios.
  */
export const TouchableRipple = ({
  size,
  color = 'primary',
  onPress,
  disabled = false,
  testID = 'touchable-ripple', children,
}: TouchableRippleProps) => {
  const maxOpacity = 0.16;
  const animationDuration = 255;

  /**
   * The animation that makes the "scale" circle value over the children component
   */
  const scaleValue = useRef(new Animated.Value(0)).current;
  /**
   * The animation that makes the "fade" effect on the circle animation after it ends
   */
  const opacityValue = useRef(new Animated.Value(0)).current;
  /**
   * The ripple size will be `children size * 2`
   */
  const rippleSize = size * 2;

  /**
   * Reset opacity values to default
   */
  function resetAnimations() {
    scaleValue.setValue(0);
    opacityValue.setValue(0);
  }

  /**
 *  After the touch, make the ripple disappear with opacity to its initial value.
 */
  function onPressOutTouchable() {
    if (onPress) {
      Animated.timing(opacityValue, {
        duration: animationDuration,
        toValue: 0,
        useNativeDriver: Platform.OS !== 'web',
      }).start(resetAnimations);
    }
  }

  /**
   * On press touchable scale the circle value to 1
   * and the opacity to `maxOpacity` making the ripple effect.
   */
  function onPressTouchable() {
    if (onPress) {
      onPress();
      Animated.parallel([
        Animated.timing(scaleValue, {
          duration: animationDuration,
          easing: Easing.bezier(0.0, 0.0, 0.2, 1),
          toValue: 1,
          useNativeDriver: Platform.OS !== 'web',
        }),
        Animated.timing(opacityValue, {
          duration: animationDuration,
          toValue: maxOpacity,
          useNativeDriver: Platform.OS !== 'web',
        }),
      ]).start();
    }
  }

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPressIn={onPressTouchable}
      onPressOut={onPressOutTouchable}
      delayPressOut={animationDuration}
      testID={testID}
    >
      <Container size={rippleSize}>
        <Ripple
          as={Animated.View}
          size={rippleSize}
          color={color}
          style={{
            opacity: opacityValue,
            transform: [{ scale: scaleValue }],
          }}
        />
        <View>{children}</View>
      </Container>
    </TouchableWithoutFeedback>
  );
};
