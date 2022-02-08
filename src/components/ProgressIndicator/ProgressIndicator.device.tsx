import { storiesOf } from '@storybook/react-native'

import { Default, Interactive } from './ProgressIndicator.stories'

storiesOf('ProgressIndicator', module)
  .add('Default', Default)
  .add('Interactive', Interactive)
