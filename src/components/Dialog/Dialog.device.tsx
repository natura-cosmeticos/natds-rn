import { storiesOf } from '@storybook/react-native';
import {
  alert,
  confirmation,
} from './Dialog.stories';

storiesOf('Dialog', module)
  .add('alert', alert)
  .add('confirmation', confirmation);
