import { storiesOf } from '@storybook/react-native'
import {
  all, fullBleed, inset, middle
} from './Divider.stories'

storiesOf('Divider', module)
  .add('all', all)
  .add('fullBleed', fullBleed)
  .add('inset', inset)
  .add('middle', middle)
