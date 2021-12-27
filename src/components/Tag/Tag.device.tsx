import { storiesOf } from '@storybook/react-native';
import {
  Default, Borders, Sizes, Colors, Interactive,
} from './Tag.stories';

storiesOf('Tag', module)
  .add('Default', Default)
  .add('Borders', Borders)
  .add('Sizes', Sizes)
  .add('Colors', Colors)
  .add('Interactive', Interactive);
