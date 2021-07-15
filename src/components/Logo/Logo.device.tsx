import { storiesOf } from '@storybook/react-native';
import {
  All,
  Default,
  Models,
  Colors,
  Sizes,
} from './Logo.stories';

storiesOf('Logo', module)
  .add('All', All)
  .add('Default', Default)
  .add('Models', Models)
  .add('Colors', Colors)
  .add('Sizes', Sizes);
