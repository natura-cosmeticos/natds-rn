import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Variants,
  Interactive
} from './Checkbox.stories'

storiesOf('Checkbox', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Interactive', Interactive)
