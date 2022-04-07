import { storiesOf } from '@storybook/react-native'
import { Default, Variants, Interactive } from './Link.stories'

storiesOf('Link', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Interactive', Interactive)
