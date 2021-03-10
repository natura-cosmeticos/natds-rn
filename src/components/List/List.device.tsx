import { storiesOf } from '@storybook/react-native';
import {
  Base,
  Dividers,
  States,
  Vertical
} from './List.stories';

storiesOf('List', module)
  .add('Base', Base)
  .add('States', States)
  .add('Vertical', Vertical)
  .add('Dividers', Dividers);
