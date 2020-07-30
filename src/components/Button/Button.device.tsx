import { storiesOf } from '@storybook/react-native';
import {
  contained, outlined, text, all, interactive, disabled,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', all)
  .add('disabled', disabled)
  .add('contained', contained)
  .add('outlined', outlined)
  .add('text', text)
  .add('interactive', interactive);
