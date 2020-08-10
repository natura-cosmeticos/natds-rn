import { storiesOf } from '@storybook/react-native';
import {
  all,
  interactive,
} from './RadioButton.stories';

storiesOf('RadioButton', module)
  .add('all', all)
  .add('interactive', interactive);
