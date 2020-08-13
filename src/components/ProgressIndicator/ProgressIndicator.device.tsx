import { storiesOf } from '@storybook/react-native';

import { circular, interactive } from './ProgressIndicator.stories';

storiesOf('ProgressIndicator', module)
  .add('circular', circular)
  .add('interactive', interactive);
