import React from 'react'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'
import { Select } from './Select'

export default {
  component: Select,
  title: 'Components/Select'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <Select />
  </StoryContainer>
)
