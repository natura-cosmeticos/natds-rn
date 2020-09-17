import { storiesOf } from '@storybook/react-native';
import {
  all,
  interactive,
} from './Avatar.stories';

storiesOf('Avatar', module)
  .add('all', all)
  .add('interactive', interactive);
