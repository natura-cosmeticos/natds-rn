import React from 'react'
import { text, select } from '@storybook/addon-knobs'
import { IconName, iconNames } from '@naturacosmeticos/natds-icons'
import { Icon } from './Icon'
import { IconColors, IconSizes } from './Icon.types'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'

const description = () => `
> A helper component to display icons from @naturacosmeticos/natds-icons package

## Properties
| Property                | Values                                                        |    Status    |
|---                      |                                                            ---|           ---|
| **color**               | color-tokens                                                  | ✅ Available |
| **size**                | none, micro, tiny, small, standard, semi, semiX, medium       | ✅ Available |
| **name**                | icon-name                                                     | ✅ Available |
| **accessibilityHint**   | string                                                        | ✅ Available |
| **accessibilityLabel**  | string                                                        | ✅ Available |
| **accessibilityLabel**  | imagebutton, image                                            | ✅ Available |


## Technical Usages Examples
`

export default {
  component: Icon,
  parameters: {
    componentSubtitle: '',
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
