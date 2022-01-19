import React from 'react'
import {
  DialogHeaderContainer, DialogHeaderContent
} from './DialogHeader.styles'
import { DialogHeaderProps } from './DialogHeader.props'

export const DialogHeader = ({
  children,
  testID = 'ds-dialog-header',
  icon
}: DialogHeaderProps) => (
  <DialogHeaderContainer testID={testID}>
    {children}
    <DialogHeaderContent>{icon}</DialogHeaderContent>
  </DialogHeaderContainer>
)
