import React, { FunctionComponent, forwardRef } from 'react'

import { ImageProps as ImageNativeProps } from 'react-native'
import * as S from './Image.styles'
import { ImageProps } from './Image.types'
import { Highlight } from './Hightlight'

export const Image:
  FunctionComponent<ImageProps> = forwardRef<ImageNativeProps, ImageProps>((props, ref) => {
    const {
      variant = 'standard', radius = 'none', fade = 'bottom', children, testID, ...rest
    } = props

    return (
      <S.Wrapper radius={radius} testID={testID}>
        {radius !== 'circle' && (
        <S.Content>
          {children}
        </S.Content>
        )}
        {variant === 'highlight' && <Highlight fade={fade} />}
        <S.Image ref={ref} {...rest} variant={variant} />
      </S.Wrapper>
    )
  })
