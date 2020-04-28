
import React from 'react';
import { Divider } from './Divider';

export default {
  component: Divider,
  parameters: {
    componentSubtitle: 'A usefull divider component.',
  },
  title: 'Components|Divider',
};


export const fullWidth = () => <Divider />;
fullWidth.story = {
  name: 'full width',
};

export const inset = () => <Divider type="inset" />;
export const middle = () => <Divider type="middle" />;
