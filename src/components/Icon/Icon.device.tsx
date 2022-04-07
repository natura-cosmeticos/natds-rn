import { storiesOf } from '@storybook/react-native'
import {
  Default, Interactive
} from './Icon.stories'

storiesOf('Icon', module)
  .add('Default', Default)
  .add('Interactive', Interactive)
