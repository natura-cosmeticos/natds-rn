import React from 'react'

import { CardProps } from './Card.types'
import { CardBaseComponent } from './CardBase'

export const Card = ({
  children,
  testID = 'card',
  type = 'base',
  elevation = true,
  radius = true
}: CardProps) => (
  <CardBaseComponent
    testID={testID}
    type={type}
    elevation={elevation}
    radius={radius}
  >
    {children}
  </CardBaseComponent>
)
