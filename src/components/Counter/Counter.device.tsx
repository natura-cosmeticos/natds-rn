import { storiesOf } from '@storybook/react-native';
import {
  All,
  Default,
  Disabled,
  Label,
  Size,
} from './Counter.stories';

storiesOf('Counter', module)
  .add('All', All)
  .add('Default', Default)
  .add('Label', Label)
  .add('Size', Size)
  .add('Disabled', Disabled);
