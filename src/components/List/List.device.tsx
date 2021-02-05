import { storiesOf } from '@storybook/react-native';
import {
  All,
  Variants,
  State,
  Disabled,
  Icons,
  Dividers,
  Interactive,
} from './List.stories';

storiesOf('List', module)
  .add('all', All)
  .add('variants', Variants)
  .add('states', State)
  .add('disabled', Disabled)
  .add('icons', Icons)
  .add('dividers', Dividers)
  .add('interactive', Interactive);
