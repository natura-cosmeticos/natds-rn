import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Variants,
  Sizes,
  Interactive,
  Brands
} from './Avatar.stories'

storiesOf('Avatar', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Interactive', Interactive)
  .add('Brands', Brands)
