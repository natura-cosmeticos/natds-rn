import React from 'react';
import { configure, addDecorator } from '@storybook/react-native';
// @ts-ignore
import { StoriesWrapper } from '../src/common/StoryWrapper';
import { loadStories } from './storyLoader';

console.disableYellowBox = true; // eslint-disable-line no-console

addDecorator(story => <StoriesWrapper story={story} />);

configure(() => {
  // eslint-disable-next-line global-require
  // require('./stories');
  loadStories();
}, module);
