import { storiesOf } from '@storybook/react-native'
import {
  Default, Variants, Interactive
} from './Rating.stories'

storiesOf('Rating', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Interactive', Interactive)
