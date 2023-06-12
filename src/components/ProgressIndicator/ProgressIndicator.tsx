import React, { useEffect, useRef, useCallback } from 'react'
import { Animated, Easing, Platform } from 'react-native'
import {
  Container, Layer, Line, View
} from './ProgressIndicator.styles'
import { ProgressIndicatorProps } from './ProgressIndicator.types'

export const ProgressIndicatorComponent = ({
  size = 'medium',
  showLayer = false,
  brand
}: ProgressIndicatorProps) => {
  /**
   * Duration specify how much the circle will take to make a 720deg loop around itself,
   * decrease it will speed up the animation speed and increase will slow the animation speed
   * The default speed is 1.4 second per loop
   */
  const duration = 1400
  /**
   * This animation/Animated.timing, is responsible for looping the border around the view.
   */
  const timer = useRef(new Animated.Value(0)).current
  const rotation = Animated.timing(timer, {
    duration,
    easing: Easing.inOut(Easing.quad),
    isInteraction: false,
    toValue: 1,
    useNativeDriver: Platform.OS !== 'web'
  })
  /**
   * The rotate animation will take from 0deg to 720deg to make a full loop around itself
   */
  const minCircularRange = '0deg'
  const maxCircularRange = '720deg'

  const layerStyle = {
    transform: [
      {
        rotate: timer.interpolate({
          inputRange: [0, 1],
          outputRange: [minCircularRange, maxCircularRange]
        })
      }
    ]
  }

  /**
   * Loop rotation animation continuously,
   * each time it reaches the end, it resets and begins again from the start.
   */

  const startRotation = useCallback((): void => {
    timer.setValue(0)
    Animated.loop(rotation).start()
  }, [rotation, timer])

  /**
   * Reset the timer and loop the animation again on each update
   */
  useEffect(() => {
    startRotation()
  }, [startRotation])

  return (
    <View size={size} showLayer={showLayer}>
      <Layer brand={brand} as={Animated.View} size={size} style={layerStyle}>
        <Container as={Animated.View} size={size}>
          <Line brand={brand} as={Animated.View} size={size} />
        </Container>
      </Layer>
    </View>
  )
}

export const ProgressIndicator = React.memo(
  ProgressIndicatorComponent
)
