import { storiesOf } from '@storybook/react-native'
import {
  Variants, Types, Icon, Interactive
} from './Alert.stories'

storiesOf('Alert', module)
  .add('Variants', Variants)
  .add('Icon', Icon)
  .add('Types', Types)
  .add('Interactive', Interactive)
