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
  .add('icon', Icon)
  .add('size', Size)
  .add('disabled', Disabled)
  .add('display block', Display)
  .add('interactive', Interactive);
