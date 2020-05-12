
import React from 'react';
import { Dialog } from './Dialog';

export default {
  component: Dialog,
  parameters: {
    componentSubtitle: 'A dialog component.',
  },
  title: 'Components|Dialog',
};

const defaultProps = {
  contentText: 'Content',
  title: 'Title',
};

export const alert = () => (
  <Dialog {...defaultProps} type='alert' />
);

export const simple = () => (
  <Dialog {...defaultProps} type='simple' />
);

export const confirmation = () => (
  <Dialog {...defaultProps} type='confirmation' />
);
