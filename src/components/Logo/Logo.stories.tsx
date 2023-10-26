import React from 'react'
import { text } from '@storybook/addon-knobs'
import { VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Logo } from './Logo'
import {
  LogoSizes, LogoColors, NeutralLogoModel
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

export const Interactive = () => (
  <VerticalStoryContainer title="Interactive">
    <Logo
      color={text('Color', 'neutral') as LogoColors}
      model={text('Model', 'a') as NeutralLogoModel}
      size={text('Size', 'veryHuge') as LogoSizes}
    />
  </VerticalStoryContainer>
)
