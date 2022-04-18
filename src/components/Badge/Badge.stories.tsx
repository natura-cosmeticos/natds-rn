import React from 'react'
import { select, number } from '@storybook/addon-knobs'
import { Badge } from './Badge'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { BadgeColors } from './Badge.types'

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Dot
  - ✅ Pulse
  - ✅ Standard

With the following attribute status:

  - **Color:**
    - ✅ \`Alert\`
    - ✅ \`Primary\`
    - ✅ \`Secondary\`
    - ✅ \`Success\`

  - ✅ **Limit**
  - ✅ **Value**
- - -
`

export default {
  component: Badge,
  parameters: {
    componentSubtitle: 'Badge is a visual indicator for numeric values.',
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
