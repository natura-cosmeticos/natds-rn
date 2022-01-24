import React from 'react'
import { withTheme } from 'styled-components/native'
import { getShadowBySize } from '../../common/themeSelectors'

import { CardBase } from './Card.styles'
import { CardProps } from './Card.types'

const CardComponent = ({
  children,
  testID = 'card',
  theme,
  type = 'base'
}: CardProps) => (
  <CardBase
    style={getShadowBySize(theme, 'micro')}
    testID={testID}
    theme={theme}
    type={type}
  >
    {children}
  </CardBase>
)

export const Card = withTheme(CardComponent)
