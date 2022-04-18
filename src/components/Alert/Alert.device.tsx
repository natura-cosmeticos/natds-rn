import { storiesOf } from '@storybook/react-native'
import { All, Interactive } from './Alert.stories'

storiesOf('Alert', module)
  .add('Variants', All)
  .add('Interactive', Interactive)
