import { storiesOf } from '@storybook/react-native';
import {
  contained, outlined, text, all,
} from './Button.stories';

storiesOf('Button', module)
  .add('all', all)
  .add('contained', contained)
  .add('outlined', outlined)
  .add('text', text);
