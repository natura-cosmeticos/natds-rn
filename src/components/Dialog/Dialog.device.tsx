import { storiesOf } from '@storybook/react-native';
import {
  alert,
  confirmation,
  confirmationStacked,
  interactive,
} from './Dialog.stories';

storiesOf('Dialog', module)
  .add('alert', alert)
  .add('confirmation', confirmation)
  .add('confirmation staked', confirmationStacked)
  .add('interactive', interactive);
