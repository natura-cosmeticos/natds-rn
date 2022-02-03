import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Disabled,
  Interactive,
  Label,
  Size,
  Range
} from './Counter.stories'

storiesOf('Counter', module)
  .add('Default', Default)
  .add('Label', Label)
  .add('Size', Size)
  .add('Disabled', Disabled)
  .add('Range', Range)
  .add('Interactive', Interactive)
