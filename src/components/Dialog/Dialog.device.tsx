import { storiesOf } from '@storybook/react-native'
import {
  Alert,
  Standard
} from './Dialog.stories'

storiesOf('Dialog', module)
  .add('Alert', Alert)
  .add('Standard', Standard)
