import { storiesOf } from '@storybook/react-native';
import {
  Interactive,
  Base,
  IconColor,
  BackgroundStyle,
  Disabled,
  Size,
  Icon,
} from './IconButton.stories';

storiesOf('IconButton', module)
  .add('Base', Base)
  .add('IconColor', IconColor)
  .add('BackgroundStyle', BackgroundStyle)
  .add('Disabled', Disabled)
  .add('Size', Size)
  .add('Icon', Icon)
  .add('Interactive', Interactive);
