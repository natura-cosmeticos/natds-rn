import { storiesOf } from '@storybook/react-native'
import {
  Interactive,
  Default,
  Colors,
  Variants,
  Sizes
} from './IconButton.stories'

storiesOf('IconButton', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Colors', Colors)
  .add('Sizes', Sizes)
  .add('Interactive', Interactive)
