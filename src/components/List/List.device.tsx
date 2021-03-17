import { storiesOf } from '@storybook/react-native';
import {
  Base,
  Dividers,
  States,
} from './List.stories';

storiesOf('List', module)
  .add('Base', Base)
  .add('States', States)
  .add('Dividers', Dividers);
