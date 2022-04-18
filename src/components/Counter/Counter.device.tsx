import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Variants,
  Sizes,
  Interactive
} from './Counter.stories'

storiesOf('Counter', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Interactive', Interactive)
