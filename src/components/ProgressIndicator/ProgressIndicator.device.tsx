import { storiesOf } from '@storybook/react-native'

import { Default, Interactive, Brands } from './ProgressIndicator.stories'

storiesOf('ProgressIndicator', module)
  .add('Default', Default)
  .add('Interactive', Interactive)
  .add('Brands', Brands)
