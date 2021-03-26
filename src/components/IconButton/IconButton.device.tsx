import { storiesOf } from '@storybook/react-native';
import {
  all,
  interactive,
  Base,
  IconColor,
  BackgroundStyle,
  Disabled,
  Size,
} from './IconButton.stories';

storiesOf('IconButton', module)
  .add('Base', Base)
  .add('IconColor', IconColor)
  .add('BackgroundStyle', BackgroundStyle)
  .add('Disabled', Disabled)
  .add('Size', Size)
  .add('all', all)
  .add('interactive', interactive);
