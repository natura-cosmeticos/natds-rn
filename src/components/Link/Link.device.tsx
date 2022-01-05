import { storiesOf } from '@storybook/react-native';
import { Default, Types, Interactive } from './Link.stories';

storiesOf('Link', module)
  .add('Default', Default)
  .add('Types', Types)
  .add('Interactive', Interactive);
