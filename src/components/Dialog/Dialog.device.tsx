import { storiesOf } from '@storybook/react-native';
import {
  alert,
  confirmation,
  interactive,
} from './Dialog.stories';

storiesOf('Dialog', module)
  .add('alert', alert)
  .add('confirmation', confirmation)
  .add('interactive', interactive);
