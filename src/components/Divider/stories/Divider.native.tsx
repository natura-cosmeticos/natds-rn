import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Divider } from '../Divider';
import { fullWidth, inset, middle } from './Divider.stories';

storiesOf('Divider')
  .add('full width', fullWidth)
  .add('inset ', inset)
  .add('middle ', middle)
