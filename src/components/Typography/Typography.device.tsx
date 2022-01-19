import { storiesOf } from '@storybook/react-native'
import { All, CustomFonts, Variants } from './Typography.stories'

storiesOf('Typography', module)
  .add('All', All)
  .add('Custom Fonts', CustomFonts)
  .add('Variants', Variants)
