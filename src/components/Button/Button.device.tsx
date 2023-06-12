import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Interactive,
  Sizes,
  Variants,
  Brand
} from './Button.stories'

storiesOf('Button', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Interactive', Interactive)
  .add('Brand', Brand)
