import { storiesOf } from '@storybook/react-native'
import {
  Default, Variants, Interactive
} from './Tab.stories'

storiesOf('Tab', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Interactive', Interactive)
