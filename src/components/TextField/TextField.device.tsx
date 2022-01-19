import { storiesOf } from '@storybook/react-native'
import {
  Action,
  Default,
  Disabled,
  Feedback,
  Type,
  Readonly,
  Required,
  Sizes,
  States,
  TextArea,
  Interactive
} from './TextField.stories'

storiesOf('TextField', module)
  .add('Default', Default)
  .add('Sizes', Sizes)
  .add('States', States)
  .add('Feedback', Feedback)
  .add('Required', Required)
  .add('Disabled', Disabled)
  .add('Readonly', Readonly)
  .add('Action', Action)
  .add('Type', Type)
  .add('TextArea', TextArea)
  .add('Interactive', Interactive)
