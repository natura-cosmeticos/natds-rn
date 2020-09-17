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
  .add('interactive', interactive)
  .add('standard', standard)
  .add('info', info)
  .add('warning', warning)
  .add('error', error)
  .add('success', success)
  .add('multiline', multiline)
  .add('multiline with button', multilineWithButton);
