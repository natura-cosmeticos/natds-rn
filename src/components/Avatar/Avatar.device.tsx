import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Variants,
  Sizes,
  Interactive
} from './Avatar.stories'

storiesOf('Avatar', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Interactive', Interactive)
