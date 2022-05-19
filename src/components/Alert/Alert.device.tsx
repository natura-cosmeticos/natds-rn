import { storiesOf } from '@storybook/react-native'
import {
  Default, Variants, Types, Icon, Title, Interactive
} from './Alert.stories'

storiesOf('Alert', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Icon', Icon)
  .add('Title', Title)
  .add('Types', Types)
  .add('Interactive', Interactive)
