import React from 'react';
import { select, text as textKnob } from '@storybook/addon-knobs';
import { Alert } from './Alert';

import {
  Variants,
  Types,
} from './Alert.styles';

const alertDefinition: string = 'An alert displays a short, important message in a way that attracts the user\'s attention without interrupting the user\'s task.';

export default {
  component: Alert,
  parameters: {
    componentSubtitle: alertDefinition,
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

export const all = () => (
  <>
    <Alert type='success' variant='standard' title='Title' message={alertDefinition}/>
    <Alert type='error' variant='standard' title='Title' message={alertDefinition}/>
    <Alert type='warning' variant='standard' title='Title' message={alertDefinition}/>
    <Alert type='info' variant='standard' title='Title' message={alertDefinition}/>
  </>
);
export const interactive = () => (
  <Alert
    title={textKnob('Text', 'Title')}
    variant={select('Variant', variants, 'standard') as Variants}
    type={select('Type', types, 'success') as Types}
    message={textKnob('Message', alertDefinition)}
    />
);
