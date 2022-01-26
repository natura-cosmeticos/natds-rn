import React from 'react'

import { withTheme } from 'styled-components/native'
import { Theme, getShadowBySize } from '../../common/themeSelectors'
import { CardProps } from './Card.types'
import { CardBase } from './Card.styles'

type CardBaseProps = CardProps & { theme: Theme }

export const CardComponent = ({
  children,
  testID,
  type,
  elevation,
  radius,
  theme
}: CardBaseProps) => (
  <CardBase
    style={elevation && getShadowBySize(theme, 'micro')}
    testID={testID}
    type={type}
    elevation={elevation}
    radius={radius}
  >
    {children}
  </CardBase>
)

export const CardBaseComponent = withTheme(CardComponent)
