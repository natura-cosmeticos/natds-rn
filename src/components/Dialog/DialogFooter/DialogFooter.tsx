import React from 'react';
import { DialogActions } from './DialogFooter.styles';
import { DialogFooterProps } from './DialogFooter.props';

export const DialogFooter = ({
  children,
  testID = 'ds-dialog-footer',
  actionsAlignment,
}: DialogFooterProps) => (
  <DialogActions actionsAlignment={actionsAlignment} testID={testID}>{children}</DialogActions>
);
