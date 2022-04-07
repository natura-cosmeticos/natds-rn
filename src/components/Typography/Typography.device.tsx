import { storiesOf } from '@storybook/react-native'
import { CustomFonts, Variants } from './Typography.stories'

storiesOf('Typography', module)
  .add('Variants', Variants)
  .add('Custom Fonts', CustomFonts)
