import { configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';

configure(() => {
  // eslint-disable-next-line global-require
  // require('./stories');
  loadStories();
}, module);
