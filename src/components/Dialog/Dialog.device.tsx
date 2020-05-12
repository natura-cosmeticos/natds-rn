import { storiesOf } from '@storybook/react-native';
import {
  alert,
  simple,
  confirmation,
} from './Dialog.stories';

storiesOf('Dialog', module)
  .add('alert', alert)
  .add('simple', simple)
  .add('confirmation', confirmation);
