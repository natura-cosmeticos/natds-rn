import { storiesOf } from '@storybook/react-native';
import {
  all,
  interactive,
} from './Checkbox.stories';

storiesOf('Checkbox', module)
  .add('all', all)
  .add('interactive', interactive);
