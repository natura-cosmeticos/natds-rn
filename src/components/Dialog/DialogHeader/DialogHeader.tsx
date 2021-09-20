import React from 'react';
import {
  DialogHeaderContainer, DialogHeaderContent, DialogHeaderTitle,
} from './DialogHeader.styles';
import { DialogHeaderProps } from './DialogHeader.props';

export const DialogHeader = ({
  children,
  testID = 'ds-dialog-header',
  title,
}: DialogHeaderProps) => (
  <DialogHeaderContainer testID={testID}>
    <DialogHeaderTitle>{title}</DialogHeaderTitle>
    <DialogHeaderContent>{children}</DialogHeaderContent>
  </DialogHeaderContainer>
);
