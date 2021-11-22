import { storiesOf } from '@storybook/react-native';
import {
  Counter, ReadOnly, Interactive, Input,
} from './Rating.stories';

storiesOf('Rating', module)
  .add('Counter', Counter)
  .add('ReadOnly', ReadOnly)
  .add('Input', Input)
  .add('Interactive', Interactive);
