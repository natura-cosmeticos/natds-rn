import { storiesOf } from '@storybook/react-native';
import {
  alert,
  standard,
  standardStackedButton,
} from './Dialog.stories';

storiesOf('Dialog', module)
  .add('alert', alert)
  .add('standard', standard)
  .add('standardStackedButton', standardStackedButton);
