import { storiesOf } from '@storybook/react-native'
import {
  Default, Variants, Sizes, Colors, Interactive, Brands
} from './Tag.stories'

storiesOf('Tag', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Colors', Colors)
  .add('Interactive', Interactive)
  .add('Brands', Brands)
