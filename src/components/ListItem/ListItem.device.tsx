import { storiesOf } from '@storybook/react-native';
import {
  Base,
  Dividers,
  RippleFeedback,
  SelectionFeedback,
} from './ListItem.stories';

storiesOf('List', module)
  .add('Base', Base)
  .add('FeedbackRipple', RippleFeedback)
  .add('FeedbackSelection', SelectionFeedback)
  .add('Dividers', Dividers);
