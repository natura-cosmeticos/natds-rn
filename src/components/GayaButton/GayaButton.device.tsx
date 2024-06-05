import { storiesOf } from '@storybook/react-native'
import {
  Default,
  Interactive,
  Sizes,
  Variants,
  BrandLight,
  BrandDark
} from './GayaButton.stories'

storiesOf('GayaButton', module)
  .add('Default', Default)
  .add('Variants', Variants)
  .add('Sizes', Sizes)
  .add('Interactive', Interactive)
  .add('BrandDark', BrandLight)
  .add('BrandDark', BrandDark)
