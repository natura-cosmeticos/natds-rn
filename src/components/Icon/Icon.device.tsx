import { storiesOf } from '@storybook/react-native'
import {
  Default, Interactive, SearchIcon, ListIcon
} from './Icon.stories'

storiesOf('Icon', module)
  .add('Default', Default)
  .add('Interactive', Interactive)
  .add('SearchIcon', SearchIcon)
  .add('ListIcon', ListIcon)
