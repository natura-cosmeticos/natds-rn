import { storiesOf } from '@storybook/react-native';
import {
  interactive,
  standard,
  info,
  warning,
  error,
  success,
  multiline,
  multilineWithButton,
} from './Snackbar.stories';

storiesOf('Snackbar', module)
  .add('interactive', interactive);

storiesOf('Snackbar', module)
  .add('standard', standard);

storiesOf('Snackbar', module)
  .add('info', info);

storiesOf('Snackbar', module)
  .add('warning', warning);

storiesOf('Snackbar', module)
  .add('error', error);

storiesOf('Snackbar', module)
  .add('success', success);

storiesOf('Snackbar', module)
  .add('multiline', multiline);

storiesOf('Snackbar', module)
  .add('multiline with button', multilineWithButton);