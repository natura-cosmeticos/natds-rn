import { storiesOf } from '@storybook/react-native';
import {
  All, Name, Color, Size, Interactive,
} from './Icon.stories';

storiesOf('Icon', module)
  .add('all', All)
  .add('name', Name)
  .add('color', Color)
  .add('size', Size)
  .add('interactive', Interactive);
