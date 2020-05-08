import { storiesOf } from '@storybook/react-native';
import {
  contained, outlined, text, all, interactive,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', all)
  .add('contained', contained)
  .add('outlined', outlined)
  .add('text', text)
  .add('interactive', interactive);
