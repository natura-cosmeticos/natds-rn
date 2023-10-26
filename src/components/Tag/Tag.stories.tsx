/* eslint-disable max-lines */
import { select, text } from '@storybook/addon-knobs'
import { StoryFn } from '@storybook/addons'
import React, { ReactNode } from 'react'

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Tag } from './Tag'
import { TagColors, TagPositions, TagSizes } from './Tag.types'

const description: StoryFn<ReactNode> = () => `
> Tags are used to label, categorize, or organize items using keywords that describe them.

## Properties
| Property                  | Values                                              |    Status    |
|---                        |                                                  ---|           ---|
| **variant (no prop)**     | Standard                                            | ✅ Available |
| **accessible**            | true/false                                          | ✅ Available |
| **accessibilityLabel**    | string                                              | ✅ Available |
| **accessibilityHint**     | string                                              | ✅ Available |
| **accessibilityRole**     | accessibilityRole                                   | ✅ Available |
| **accessibilityState**    | accessibilityState                                  | ✅ Available |
| **accessibilityState**    | accessibilityState                                  | ✅ Available |
| **allowFontScaling**      | true/false                                          | ✅ Available |
| **maxFontSizeMultiplier** | number                                              | ✅ Available |
| **text**                  | string                                              | ✅ Available |
| **borderPosition**        | default, left, right                                | ✅ Available |
| **size**                  | small, standard                                     | ✅ Available |
| **color**                 | alert, link, primary, secondary, success, warning   | ✅ Available |
| **brand**                 | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |
## Technical Usages Examples
`

const tagColors = [
  'alert',
  'link',
  'primary',
  'secondary',
  'success',
  'warning'
]

export default {
  component: Tag,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Tag'
}

export const Default: StoryFn<ReactNode> = () => (
  <StoryContainer title="Standard">
    <Tag text="Design System" />
  </StoryContainer>
)

export const Variants: StoryFn<ReactNode> = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Default">
      <Tag text="Design System" borderPosition="default" />
    </StoryContainer>
    <StoryContainer title="Right">
      <Tag text="Design System" borderPosition="right" />
    </StoryContainer>
    <StoryContainer title="Left">
      <Tag text="Design System" borderPosition="left" />
    </StoryContainer>
  </StoryWrapper>
)

export const Sizes: StoryFn<ReactNode> = () => (
  <>
    <StoryContainer title="Standard">
      <Tag text="Design System" size="standard" />
    </StoryContainer>
    <StoryContainer title="Small">
      <Tag text="Design System" size="small" />
    </StoryContainer>
  </>
)
export const Brands: StoryFn<ReactNode> = () => (
  <>
    <StoryContainer title="Avon">
      <Tag brand="avon" text="Design System" size="standard" />
    </StoryContainer>
    <StoryContainer title="Avon v2">
      <Tag brand="avon_v2" text="Design System" size="small" />
    </StoryContainer>
  </>
)

export const Colors: StoryFn<ReactNode> = () => (
  <>
    <StoryContainer title="Primary">
      <Tag text="Design System" color="primary" />
    </StoryContainer>
    <StoryContainer title="Secondary">
      <Tag text="Design System" color="secondary" />
    </StoryContainer>
    <StoryContainer title="Alert">
      <Tag text="Design System" color="alert" />
    </StoryContainer>
    <StoryContainer title="Warning">
      <Tag text="Design System" color="warning" />
    </StoryContainer>
    <StoryContainer title="Success">
      <Tag text="Design System" color="success" />
    </StoryContainer>
    <StoryContainer title="Link">
      <Tag text="Design System" color="link" />
    </StoryContainer>
  </>
)

export const Interactive: StoryFn<ReactNode> = () => (
  <StoryContainer title="Interactive">
    <Tag
      text={text('Text', 'Design System')}
      size={select('Size', ['small', 'standard'], 'small') as TagSizes}
      color={select('Color', tagColors, 'primary') as TagColors}
      borderPosition={select('Border Position', ['default', 'left', 'right'], 'default') as TagPositions}
    />
  </StoryContainer>
)
