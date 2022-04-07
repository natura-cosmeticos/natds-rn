import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Variants,
  Interactive
} from './RadioButton.stories'

storiesOf('RadioButton', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Interactive', Interactive)
