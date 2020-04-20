import { configure } from '@storybook/react-native';

configure(() => {
  // eslint-disable-next-line global-require
  require('./stories');
}, module);
