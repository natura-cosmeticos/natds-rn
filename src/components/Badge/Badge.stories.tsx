import React from 'react'
import { select, number } from '@storybook/addon-knobs'
import { Badge } from './Badge'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { BadgeColors } from './Badge.types'

const description = () => `
> Badge is a visual indicator for numeric values.

## Properties
| Property                   | Values                                                                                            |    Status           |
|---                         |                                                                                                ---|                  ---|
| **variant**                | dot, pulse, standard                                                                              | ✅ Available        |
| **accessible**             | true/false                                                                                        | ✅ Available        |
| **accessibilityLabel**     | string                                                                                            | ✅ Available        |
| **accessibilityRole**      | AccessibilityRole                                                                                 | ✅ Available        |
| **accessibilityValue**     | accessibilityValue                                                                                | ✅ Available        |
| **color**                  | primary, secondary, success, alert                                                                | ✅ Available        |
| **limit**                  | number                                                                                            | ✅ Available        |
| **value**                  | number                                                                                            | ✅ Available        |
| **brand**                  | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |


## Technical Usages Examples
`

export default {
  component: Badge,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components/Badge'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <Badge variant="standard" value={100} limit={99} />
  </StoryContainer>
)
export const Brand = () => (
  <StoryWrapper title="Standard Brand Avon e Avon V2">
    <StoryContainer title="Standard Avon">
      <Badge brand="avon" color="primary" variant="standard" value={100} limit={99} />
    </StoryContainer>
    <StoryContainer title="Standard Avon v2">
      <Badge brand="avon_v2" color="primary" variant="standard" value={100} limit={99} />
    </StoryContainer>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Dot">
      <Badge variant="dot" />
    </StoryContainer>
    <StoryContainer title="Pulse">
      <Badge variant="pulse" color="success" />
    </StoryContainer>
    <StoryContainer title="Standard">
      <Badge variant="standard" color="primary" value={100} limit={99} />
    </StoryContainer>
  </StoryWrapper>
)

export const Colors = () => (
  <StoryWrapper title="Colors">
    <StoryContainer title="Primary">
      <Badge variant="standard" color="primary" value={100} limit={99} />
    </StoryContainer>
    <StoryContainer title="Secondary">
      <Badge variant="standard" color="secondary" value={100} limit={99} />
    </StoryContainer>
    <StoryContainer title="Success">
      <Badge variant="standard" color="success" value={100} limit={99} />
    </StoryContainer>
    <StoryContainer title="Alert">
      <Badge variant="standard" color="alert" value={100} limit={99} />
    </StoryContainer>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Badge
      variant={select('Type', ['dot', 'pulse', 'standard'], 'standard')}
      value={number('Value', 100) as number}
      limit={number('Limit', 99) as number}
      color={select('Color', ['primary', 'secondary', 'success', 'alert'], 'primary' as BadgeColors)}
    />
  </StoryContainer>
)
