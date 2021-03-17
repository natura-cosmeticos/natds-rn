/* eslint-disable max-statements, max-lines, no-underscore-dangle */

import React, { ReactElement, useRef, useState } from 'react';
import {
  TouchableWithoutFeedback,
  Animated,
  Easing,
  Platform,
  findNodeHandle,
  UIManager,
} from 'react-native';
import { Container, Ripple } from './TouchableRipple.styles';
import { Theme } from '../../common/themeSelectors';

export type TouchableRippleColors = 'primary' | 'secondary' | 'highlight';

export interface TouchableRippleProps {
  /**
   * Children component
   */
  children?: ReactElement;
  /**
   * Ripple color: `primary` | `secondary` | `highlight`
   * @default: `primary`
   */
  color?: TouchableRippleColors;
  /*
   * Deactivates the palpable effect, will not call the callback function when pressing;
   */
  disabled?: boolean;
  /**
   * Controls if the ripple should overflow the content of not
   */
  hideOverflow?: boolean;
  /**
   * Size of the children, the ripple will have the double of this size.
   */
  size: number;
  /**
   * Will be called as soon the ripple animation start
   */
  onPress?: () => void;
  /**
   * Optional testID
   */
  testID?: string;
  /**
   * Optional testID
   */
  theme?: Theme;
}

export const getChildrenPosition = (ref, setPosition: Function) => {
  if (ref && ref._children && ref._children[0]) {
    UIManager.measure(
      findNodeHandle(ref._children[0]) || 0,
      (elX, elY, width, height) => {
        setPosition({ left: elX + (width / 2), top: elY + (height / 2) });
      },
    );
  }
};

interface State {
  left: string
  top: string
}

export const TouchableRipple = ({
  children,
  color = 'primary',
  disabled = false,
  size,
  onPress,
  testID = 'touchable-ripple',
  hideOverflow = false,
}: TouchableRippleProps) => {
  const maxOpacity = 0.16;
  const animationDuration = 255;
  const isNative = Platform.OS !== 'web';

  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;
  const rippleSize = size * 2;

  const [position, setPosition] = useState<State>({
    left: '50%',
    top: '50%',
  });

  function resetAnimations() {
    scaleValue.setValue(0);
    opacityValue.setValue(0);
  }

  function onPressOutTouchable() {
    if (onPress) {
      Animated.timing(opacityValue, {
        duration: animationDuration,
        toValue: 0,
        useNativeDriver: isNative,
      }).start(resetAnimations);
    }
  }

  function onPressTouchable() {
    if (onPress) {
      resetAnimations();
      Animated.parallel([
        Animated.timing(scaleValue, {
          duration: animationDuration,
          easing: Easing.bezier(0.0, 0.0, 0.2, 1),
          toValue: 1,
          useNativeDriver: isNative,
        }),
        Animated.timing(opacityValue, {
          duration: animationDuration,
          toValue: maxOpacity,
          useNativeDriver: isNative,
        }),
      ]).start();
    }
  }

  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      onPressIn={onPressTouchable}
      onPressOut={onPressOutTouchable}
      onPress={onPress}
      delayPressOut={animationDuration}
      testID={testID}
    >
      <Container
        hideOverflow={hideOverflow}
        ref={ref => getChildrenPosition(ref, setPosition)}
      >
        {children}
        <Ripple
          as={Animated.View}
          size={rippleSize}
          color={color}
          style={{
            left: position.left,
            opacity: opacityValue,
            top: position.top,
            transform: [
              { translateX: -(rippleSize / 2) },
              { translateY: -(rippleSize / 2) },
              { scale: scaleValue },
            ],
          }}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};
