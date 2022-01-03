import { storiesOf } from '@storybook/react-native';
import {
  Default,
  Indeterminate,
  Disabled,
  Interactive,
} from './Checkbox.stories';

storiesOf('Checkbox', module)
  .add('Default', Default)
  .add('Indeterminate', Indeterminate)
  .add('Disabled', Disabled)
  .add('Interactive', Interactive);
