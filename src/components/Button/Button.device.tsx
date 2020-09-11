import { storiesOf } from '@storybook/react-native';
import {
  All,
  Default,
  Variants,
  Interactive,
  Size,
  Disabled,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', All)
  .add('default', Default)
  .add('variants', Variants)
  .add('size', Size)
  .add('disabled', Disabled)
  .add('interactive', Interactive);
