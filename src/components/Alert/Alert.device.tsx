import { storiesOf } from '@storybook/react-native'
import {
  Default, Variants, Types, Icon, Interactive
} from './Alert.stories'

storiesOf('Alert', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Icon', Icon)
  .add('Types', Types)
  .add('Interactive', Interactive)
