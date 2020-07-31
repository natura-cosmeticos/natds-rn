import { storiesOf } from '@storybook/react-native';
import {
  all,
  contained,
  disabled,
  interactive,
  outlined,
  text,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', all)
  .add('contained', contained)
  .add('outlined', outlined)
  .add('text', text)
  .add('disabled', disabled)
  .add('interactive', interactive);
