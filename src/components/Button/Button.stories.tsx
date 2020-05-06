
import React from 'react';
import { Button } from './Button';

export default {
  component: Button,
  parameters: {
    componentSubtitle: 'A usefull button component.',
  },
  title: 'Components|Button',
};


export const contained = () => <Button text="Hello :)"/>;

export const outlined = () => <Button type="outlined" text="Hello :)"/>;
