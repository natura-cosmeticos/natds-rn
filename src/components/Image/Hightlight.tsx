import React from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Defs, Rect, LinearGradient, Stop, Svg
} from 'react-native-svg'
import { withTheme } from 'styled-components/native'
import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import { ImageBaseProps } from './Image.types'

type FadeProps = {
  theme: Theme;
} & Pick<ImageBaseProps, 'fade' | 'variant' | 'source'>

export const getFadePosition = (fade = 'bottom') => {
  const positions = {
    left: {
      x1: '1', y1: '0', x2: '0', y2: '0'
    },
    top: {
      x1: '0', y1: '1', x2: '0', y2: '0'
    },
    right: {
      x1: '0', y1: '0', x2: '1', y2: '0'
    },
    bottom: {
      x1: '0', y1: '0', x2: '0', y2: '1'
    }
  }

  return positions[fade] || positions.bottom
}

export const isHighlight = (props: ImageBaseProps): props is ImageBaseProps => props.variant === 'highlight'
const defaultPosition = {
  x1: '0', y1: '0', x2: '0', y2: '0'
}

export const Fade = (props: FadeProps) => {
  const { theme, fade } = props

  const fadePosition = isHighlight(props) ? defaultPosition : getFadePosition(fade)
  const opacity = isHighlight(props) ? theme.opacity.medium : theme.opacity.veryHigh

  return (
    <View style={{
      top: 0, position: 'absolute', width: '100%', height: '100%', zIndex: 1
    }}
    >
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFillObject}>
        <Defs>
          <LinearGradient id="fade_overlay" {...fadePosition}>
            <Stop offset="1" stopColor={theme.color.highlight} stopOpacity={opacity} />
            <Stop offset="0" stopColor={theme.color.highlight} stopOpacity="0" />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#fade_overlay)" />
      </Svg>
    </View>
  )
}

export const Highlight = withTheme(Fade)
