import React from 'react';
import {
  DialogBodyContainer, DialogBodyText, DialogBodyScroll,
} from './DialogBody.styles';
import { DialogBodyProps } from './DialogBody.props';
import { Divider } from '../../Divider/Divider';

export const DialogBody = ({
  children,
  divider = false,
  testID = 'ds-dialog-body',
}: DialogBodyProps) => (
  <DialogBodyContainer testID={testID}>
    {divider && <Divider />}
    <DialogBodyScroll>
      <DialogBodyText>{children}</DialogBodyText>
    </DialogBodyScroll>
    {divider && <Divider />}
  </DialogBodyContainer>
);
