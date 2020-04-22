import React from 'react';
import { addDecorator } from '@storybook/react';// eslint-disable-line import/no-extraneous-dependencies
import { configure } from '@storybook/react-native'; // eslint-disable-line import/no-extraneous-dependencies

configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);

