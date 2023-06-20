/* eslint-disable max-len */
import React, { useEffect, useRef, useCallback } from 'react'
import { Animated, Platform } from 'react-native'

import {
  Container, Circle, BadgeBase as Pulse, Label
} from './Badge.styles'
import { BadgeProps, BadgeStandardProps, AnimationProps } from './Badge.types'

export const buildValue = ({ value, limit }: BadgeStandardProps) => (limit && value >= limit ? `${limit}+` : value)
export const isBadgeStandard = (props: BadgeProps): props is BadgeStandardProps => props.variant === 'standard'

export const Badge = (props: BadgeProps) => {
  const scale = useRef(new Animated.Value(1)).current
  const opacity = useRef(new Animated.Value(1)).current
  const animationTime = 1600

  const {
    color = 'alert', variant, testID = 'ds-badge', accessible, accessibilityLabel, accessibilityRole, accessibilityValue, brand
  } = props

  const setAnimation = useCallback(({ currentValue, duration, toValue }: AnimationProps) => {
    const animation = Animated.timing(currentValue, {
      duration,
      isInteraction: false,
      toValue,
      useNativeDriver: Platform.OS !== 'web'
    })

    Animated.loop(animation).start()
  }, [])

  useEffect(() => {
    if (variant === 'pulse') {
      setAnimation({ currentValue: scale, duration: animationTime, toValue: 2.25 })
      setAnimation({ currentValue: opacity, duration: animationTime, toValue: 0 })
    }
  }, [opacity, scale, setAnimation, variant])

  return (
    <Container
      testID={testID}
      accessible={accessible}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityValue={accessibilityValue}
    >
      <Circle color={color} variant={variant} brand={brand}>
        {isBadgeStandard(props) && <Label brand={brand} color={color} variant={variant}>{buildValue(props)}</Label>}
      </Circle>
      {variant === 'pulse' && (
      <Pulse
        testID="ds-badge-pulse"
        as={Animated.View}
        color={color}
        variant={variant}
        style={{
          opacity, position: 'absolute', transform: [{ scale }], zIndex: -1
        }}
      />
      )}
    </Container>
  )
}
