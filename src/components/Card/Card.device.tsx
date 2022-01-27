import { storiesOf } from '@storybook/react-native'
import { Default, Interactive } from './Card.stories'

storiesOf('Card', module)
  .add('Default', Default)
  .add('Interactive', Interactive)
