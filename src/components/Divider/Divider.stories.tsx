
import React from 'react';
import { text, select } from '@storybook/addon-knobs';
import { Divider, DividerPropTypes } from './Divider';

export default {
  component: Divider,
  parameters: {
    componentSubtitle: 'A usefull divider component.',
  },
  title: 'Components|Divider',
};

const types = {
  full: 'full',
  inset: 'inset',
  middle: 'middle',
};

// @ts-ignore
export const fullWidth = () => <Divider type={select('Type', types, 'Type')} />;
fullWidth.story = {
  name: 'full width',
};

// @ts-ignore
export const inset = () => <Divider type={select('Type', types, 'Type')} />;

// @ts-ignore
export const middle = () => <Divider type={select('Type', types, 'Type')} />;
