import { storiesOf } from '@storybook/react-native'
import {
  All, Positions, Icon, Disabled, Color, Elevation, Interactive
} from './Tab.stories'

storiesOf('Tab', module)
  .add('All', All)
  .add('Color', Color)
  .add('Disabled', Disabled)
  .add('Elevation', Elevation)
  .add('Icon', Icon)
  .add('Positions', Positions)
  .add('Interactive', Interactive)
