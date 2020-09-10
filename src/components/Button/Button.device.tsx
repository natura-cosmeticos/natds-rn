import { storiesOf } from '@storybook/react-native';
import {
  All,
  Default,
  Variants,
  Interactive,
  Size,
  Disabled,
  Display,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', All)
  .add('default', Default)
  .add('variants', Variants)
  .add('size', Size)
  .add('disabled', Disabled)
  .add('display block', Display)
  .add('interactive', Interactive);
