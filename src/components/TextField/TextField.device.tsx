import { storiesOf } from '@storybook/react-native';
import {
  Action,
  All,
  Default,
  Disabled,
  Feedback,
  Password,
  Readonly,
  Required,
  Sizes,
  States,
} from './TextField.stories';

storiesOf('TextField', module)
  .add('All', All)
  .add('Default', Default)
  .add('Sizes', Sizes)
  .add('States', States)
  .add('Feedback', Feedback)
  .add('Required', Required)
  .add('Disabled', Disabled)
  .add('Readonly', Readonly)
  .add('Action', Action)
  .add('Password', Password);
