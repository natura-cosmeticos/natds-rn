import React from 'react';
import { select, text as textKnob } from '@storybook/addon-knobs';
import { Alert } from './Alert';

import {
  Variants,
  Types,
} from './Alert.styles';

export default {
  component: Alert,
  parameters: {
    componentSubtitle: 'An alert displays a short, important message in a way that attracts the user\'s attention without interrupting the user\'s task.',
  },
  title: 'Components|Alert',
};

const types = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
};

const variants = {
  standard: 'standard',
};

const message: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.';

export const all = () => (
  <>
    <Alert type='success' variant='standard' title='Title' message={message}/>
    <Alert type='error' variant='standard' title='Title' message={message}/>
    <Alert type='warning' variant='standard' title='Title' message={message}/>
    <Alert type='info' variant='standard' title='Title' message={message}/>
  </>
);
export const interactive = () => (
  <Alert
    title={textKnob('Text', 'Title')}
    variant={select('Variant', variants, 'standard') as Variants}
    type={select('Type', types, 'success') as Types}
    message={message}
    />
);
