import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Variants,
  Colors,
  Interactive
} from './Badge.stories'

storiesOf('Badge', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Colors', Colors)
  .add('Interactive', Interactive)
