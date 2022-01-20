import React from 'react'
import { Badge } from './Badge'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'

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

export const All = () => (
  <StoryContainer title="">
    <Badge variant="dot" />
    <Badge variant="pulse" color="success" />
    <Badge variant="standard" color="primary" value={10} limit={9} />
    <Badge variant="standard" color="secondary" value={100} limit={99} />
    <Badge variant="standard" value={1000} />
  </StoryContainer>
)
