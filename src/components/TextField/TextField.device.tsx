import { storiesOf } from '@storybook/react-native';
import {
  All,
  Variants,
  Interactive,
  Size,
  State,
  Feedback,
  Required,
  ReadOnly,
  HelperText,
  Type,
  Disabled,
} from './TextField.stories';

storiesOf('TextField', module)
  .add('all', All)
  .add('variants', Variants)
  .add('size', Size)
  .add('states', State)
  .add('feedback', Feedback)
  .add('required', Required)
  .add('readOnly', ReadOnly)
  .add('helperText', HelperText)
  .add('type', Type)
  .add('disabled', Disabled)
  .add('interactive', Interactive);
