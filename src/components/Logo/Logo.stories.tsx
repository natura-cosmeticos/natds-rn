import React from 'react'
import { select } from '@storybook/addon-knobs'
import { VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Logo } from './Logo'
import {
  LogoSizes, LogoColors, NeutralLogoModel
} from './Logo.types'

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Base

With the following attribute status:

- **Model**
    - ✅ \`primary\`
    - ✅ \`secondary\`
- **Color**
    - ✅ \`neutral\`
    - ✅ \`primary\`
    - ✅ \`secondary\`
    - ✅ \`highlight\`
    - ✅ \`surface\`
- **Size**
    - ✅ \`medium\`
    - ✅ \`mediumx\`
    - ✅ \`large\`
    - ✅ \`largex\`
    - ✅ \`largexx\`
    - ✅ \`largexxx\`
    - ✅ \`huge\`
    - ✅ \`hugex\`
    - ✅ \`hugexx\`
    - ✅ \`hugexxx\`
    - ✅ \`veryhuge\`

- - -
`

export default {
  component: Logo,
  parameters: {
    componentSubtitle: 'Logo adapted as brand standards for each company.',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Logo'
}

export const Interactive = () => (
  <VerticalStoryContainer title="Interactive">
    <Logo
      color={select('Color', ['neutral', 'primary', 'secondary', 'highlight', 'surface'], 'neutral') as LogoColors}
      model={select('Model', ['a', 'b'], 'a') as NeutralLogoModel}
      size={select('Size', ['medium', 'mediumX', 'large', 'largeX', 'largeXX', 'largeXXX', 'huge', 'hugeX', 'hugeXX', 'hugeXXX', 'veryHuge'], 'veryHuge') as LogoSizes}
    />
  </VerticalStoryContainer>
)
