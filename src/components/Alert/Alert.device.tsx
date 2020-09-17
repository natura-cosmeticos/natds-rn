import { storiesOf } from '@storybook/react-native';
import { all, interactive } from './Alert.stories';

storiesOf('Alert', module)
  .add('all', all)
  .add('interactive', interactive);
