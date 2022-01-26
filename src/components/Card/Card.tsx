import React from 'react'

import { CardProps } from './Card.types'
import { CardBase } from './Card.styles'

export const Card = ({
  children,
  testID = 'card',
  type = 'base',
  elevation = false,
  radius = false
}: CardProps) => (
  <CardBase
    testID={testID}
    type={type}
    elevation={elevation}
    radius={radius}
  >
    {children}
  </CardBase>
)
