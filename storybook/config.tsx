/* eslint-disable */
import React from 'react';
import { configure, addDecorator } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import StoriesWrapper from '../src/common/StoryWrapper';
// @ts-ignore
import { loadStories } from './storyLoader';

console.disableYellowBox = true;

addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
);
addDecorator(story => <StoriesWrapper story={story} />);

configure(() => {
  loadStories();
}, module);
