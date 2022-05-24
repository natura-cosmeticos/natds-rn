import React from 'react'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'

import Select from './Select'

const description = () => `
- - -

- - -
`

export default {
  component: Select,
  parameters: {
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Select'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <Select />
  </StoryContainer>
)
