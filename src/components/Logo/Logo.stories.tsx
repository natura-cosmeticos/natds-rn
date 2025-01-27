import React from 'react'
import { select } from '@storybook/addon-knobs'
import { VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Logo } from './Logo'
import {
  LogoSizes, LogoColors, LogoLanguages
} from './Logo.types'
// theme 0.82.3
const description = () => `
> Logo adapted as brand standards for each company.

## Properties
| Property                | Values                                           |    Status    |
|---                      |                                               ---|           ---|
| **accessibilityLabel**  | string                                           | ✅ Available |
| **color**               | neutral, primary, secondary, highlight, surface  | ✅ Available |
| **model**               | a, b                                             | ✅ Available |
| **size**                | medium, mediumX, large, largeX, largeXX, largeXXX <br /> huge, hugeX, hugeXX, hugeXXX, veryHuge     | ✅ Available |

## Technical Usages Examples
`

export default {
  component: Logo,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Logo'
}
type Model = 'a' | 'b'
const Model = {
  a: 'a',
  b: 'b'
}
const Color = {
  neutral: 'neutral',
  primary: 'primary',
  secondary: 'secondary',
  highlight: 'highlight',
  surface: 'surface'
}
const Language = {
  es: 'es',
  pt: 'pt',
  default: 'default'
}
const Size = {
  medium: 'medium',
  mediumX: 'mediumX',
  large: 'large',
  largeX: 'largeX',
  largeXX: 'largeXX',
  largeXXX: 'largeXXX',
  huge: 'huge',
  hugeX: 'hugeX',
  hugeXX: 'hugeXX',
  hugeXXX: 'hugeXXX',
  veryHuge: 'veryHuge'
}
export const Interactive = () => (
  <VerticalStoryContainer title="Interactive">
    <div style={{ padding: 24 }}>
      <Logo
        color={select('Color', Color, 'neutral') as LogoColors}
        model={select('model', Model, 'a') as Model}
        size={select('Size', Size, 'veryHuge') as LogoSizes}
        languages={select('Language', Language, 'default') as LogoLanguages}
      />

    </div>
  </VerticalStoryContainer>
)
