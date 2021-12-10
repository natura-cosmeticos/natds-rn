import { storiesOf } from '@storybook/react-native';
import {
  All,
  Interactive,
} from './Avatar.stories';

storiesOf('Avatar', module)
  .add('All', All)
  .add('Interactive', Interactive);
