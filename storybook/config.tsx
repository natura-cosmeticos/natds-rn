import { configure } from '@storybook/react-native';
// @ts-ignore
import { loadStories } from './storyLoader';

console.disableYellowBox = true; // eslint-disable-line no-console

configure(() => {
  // eslint-disable-next-line global-require
  // require('./stories');
  loadStories();
}, module);
