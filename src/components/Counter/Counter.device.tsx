import { storiesOf } from '@storybook/react-native';
import {
  All,
  Default,
  Disabled,
  Label,
} from './Counter.stories';

storiesOf('Counter', module)
  .add('All', All)
  .add('Default', Default)
  .add('Label', Label)
  .add('Disabled', Disabled);
