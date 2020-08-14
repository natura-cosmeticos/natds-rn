import { storiesOf } from '@storybook/react-native';
import { all, interactive } from './IconButton.stories';

storiesOf('IconButton', module)
  .add('all', all)
  .add('interactive', interactive);
