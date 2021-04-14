import { storiesOf } from '@storybook/react-native';
import {
  All,
  Default,
  Disabled,
  Display,
  Icon,
  Interactive,
  Size,
  Variants,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', All)
  .add('default', Default)
  .add('variants', Variants)
  .add('size', Size)
  .add('icon', Icon)
  .add('disabled', Disabled)
  .add('display', Display)
  .add('interactive', Interactive);
