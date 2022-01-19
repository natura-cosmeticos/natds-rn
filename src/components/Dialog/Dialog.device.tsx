import { storiesOf } from '@storybook/react-native'
import {
  Alert,
  Standard
} from './Dialog.stories'

storiesOf('Dialog', module)
  .add('alert', Alert)
  .add('standard', Standard)
