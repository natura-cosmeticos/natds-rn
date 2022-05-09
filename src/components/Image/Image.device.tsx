import { storiesOf } from '@storybook/react-native'
import {
  Default, Variants, Radius, Fade, Content, Interactive
} from './Image.stories'

storiesOf('Image', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Radius', Radius)
  .add('Fade', Fade)
  .add('Content', Content)
  .add('Interactive', Interactive)
