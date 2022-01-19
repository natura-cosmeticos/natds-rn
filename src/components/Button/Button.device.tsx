import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Icons,
  Interactive,
  Sizes,
  Disabled,
  Display,
  Variants
} from './Button.stories'

storiesOf('Button', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Icons', Icons)
  .add('Disabled', Disabled)
  .add('Display', Display)
  .add('Interactive', Interactive)
