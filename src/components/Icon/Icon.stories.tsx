import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { IconName, iconNames } from '@naturacosmeticos/natds-icons'
import { Icon } from './Icon'
import { IconColors, IconSizes } from './Icon.types'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'

const description = () => `
---

**NOTE**: This component is available with the following attribute status:

- ✅ **Color:** all supported Color tokens from \`natds-themes\`
- ✅  **Size:** all supported Size tokens from \`natds-themes\`
- ✅  **Name:** all supported Icon names from [Icon Library](https://ds.natura.design/28db352be/p/94367e-icon-library/b/6154b9)

---
`

export default {
  component: Icon,
  parameters: {
    componentSubtitle: 'A helper component to display icons from @naturacosmeticos/natds-icons package',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components/Icon'
}

export const Default = () => (
  <StoryContainer title="Default">
    <Icon />
  </StoryContainer>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Icon
      color={text('Color', 'highlight')as IconColors}
      name={select('Icon name', iconNames as Array<IconName>, 'outlined-default-mockup') as IconName}
      size={text('Size', 'standard') as IconSizes}
    />
  </StoryContainer>
)
