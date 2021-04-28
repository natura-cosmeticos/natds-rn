import { storiesOf } from '@storybook/react-native';
import {
  all,
  color,
  content,
  limit,
  type,
  interactive,
} from './Badge.stories';

storiesOf('Badge', module)
  .add('all', all)
  .add('type', type)
  .add('color', color)
  .add('content', content)
  .add('limit', limit)
  .add('interactive', interactive);
