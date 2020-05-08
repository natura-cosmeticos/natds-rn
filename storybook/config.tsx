import React from 'react';
import { configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
// @ts-ignore
import { StoriesWrapper } from '../src/common/StoryWrapper';
import { loadStories } from './storyLoader';

console.disableYellowBox = true; // eslint-disable-line no-console

addDecorator(withKnobs);
addDecorator(story => <StoriesWrapper story={story} />);

configure(() => {
  // eslint-disable-next-line global-require
  // require('./stories');
  loadStories();
}, module);
