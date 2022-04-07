import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Dividers,
  RippleFeedback,
  SelectionFeedback
} from './ListItem.stories'

storiesOf('ListItem', module)
  .add('Default', Default)
  .add('FeedbackRipple', RippleFeedback)
  .add('FeedbackSelection', SelectionFeedback)
  .add('Dividers', Dividers)
