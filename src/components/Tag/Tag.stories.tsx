/* eslint-disable max-lines */
import { select, text } from '@storybook/addon-knobs'
import { StoryFn } from '@storybook/addons'
import React, { ReactNode } from 'react'

import { StoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Tag } from './Tag'
import { TagColors, TagPositions, TagSizes } from './Tag.types'

const description: StoryFn<ReactNode> = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - **Attributes:**
    - **Size:**
      - ✅ \`Standard\`
      - ✅ \`Small\`
    - **Color:**
      - ✅ \`Primary\`
      - ✅ \`Secondary\`
      - ✅ \`Alert\`
      - ✅ \`Success\`
      - ✅ \`Link\`
      - ✅ \`Warining\`
    - **Position:**
      - ✅ \`Center\`
      - ✅ \`Left\`
      - ✅ \`Right\`

- - -
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
    componentSubtitle: 'Tags are used to label, categorize, or organize items using keywords that describe them.',
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

export const Borders: StoryFn<ReactNode> = () => (
  <>
    <StoryContainer title="Default">
      <Tag text="Design System" borderPosition="default" />
    </StoryContainer>
    <StoryContainer title="Right">
      <Tag text="Design System" borderPosition="right" />
    </StoryContainer>
    <StoryContainer title="Left">
      <Tag text="Design System" borderPosition="left" />
    </StoryContainer>
  </>
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
