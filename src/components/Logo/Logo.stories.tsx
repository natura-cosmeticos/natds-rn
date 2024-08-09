import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Logo } from './Logo'
import {
  LogoSizes, LogoColors
} from './Logo.types'

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
export const Interactive = () => (
  <VerticalStoryContainer title="Interactive">
    <div style={{ padding: 24 }}>
      <Logo
        color={text('Color', 'neutral') as LogoColors}
        model={select('model', Model, 'a') as Model}
        size={text('Size', 'veryHuge') as LogoSizes}
      />

    </div>
  </VerticalStoryContainer>
)
