import { storiesOf } from '@storybook/react-native';
import {
  all,
  Color,
  Content,
  Limit,
  Type,
  interactive,
} from './Badge.stories';

storiesOf('Badge', module)
  .add('all', all)
  .add('type', Type)
  .add('color', Color)
  .add('content', Content)
  .add('limit', Limit)
  .add('interactive', interactive);
