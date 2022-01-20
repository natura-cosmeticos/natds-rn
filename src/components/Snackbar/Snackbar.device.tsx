import { storiesOf } from '@storybook/react-native'
import {
  Interactive,
  Standard,
  Info,
  Warning,
  Error,
  Success,
  Multiline,
  MultilineWithButton
} from './Snackbar.stories'

storiesOf('Snackbar', module)
  .add('interactive', Interactive)
  .add('standard', Standard)
  .add('info', Info)
  .add('warning', Warning)
  .add('error', Error)
  .add('success', Success)
  .add('multiline', Multiline)
  .add('multiline with button', MultilineWithButton)
