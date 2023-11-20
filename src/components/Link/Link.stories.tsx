import React from 'react'
import { Alert } from 'react-native'
import { select, text as textKnob } from '@storybook/addon-knobs'

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Link } from './Link'
import { LinkTypes } from './Link.types'

const description = () => `
> The link component allows you to have a pattern for anchor text.

## Properties
| Property                | Values                                         |    Status    |
|---                      |                                             ---|           ---|
| **type**                | standard, underline                            | ✅ Available |
| **onPress**              | none, medium, circle                           | ✅ Available |



## Technical Usages Examples
`

export default {
  component: Link,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Link'
}

const onPress = () => {
  Alert.alert('something happened')
}

export const Default = () => (
  <StoryContainer title="Standard">
    <Link onPress={onPress}>Natura Design System</Link>
  </StoryContainer>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Standard">
      <Link onPress={onPress}>Natura Design System</Link>
    </StoryContainer>
    <StoryContainer title="Underline">
      <Link onPress={onPress} type="underline">Natura Design System</Link>
    </StoryContainer>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Link
      onPress={onPress}
      type={select('Type', ['standard', 'underline'], 'standard') as LinkTypes}
    >
      {textKnob('Children', 'Natura Design System')}
    </Link>
  </StoryContainer>
)
