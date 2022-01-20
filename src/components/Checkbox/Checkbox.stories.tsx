/* eslint-disable max-lines */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'

import { Checkbox } from './Checkbox'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { CheckboxColors } from './Checkbox.types'

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ **Standard**
  - ✅ **Indeterminate**

With the following attribute status:

  - ✅ **Disabled**

- - -
`

export default {
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Selection controls allow the user to select options.',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Checkbox'
}

const colorTypes = {
  primary: 'primary',
  secondary: 'secondary'
}

export const Default = () => {
  const [isSelected, setIsSelected] = useState(true)

  return (
    <StoryContainer title="Standard">
      <Checkbox
        label="Natura Design System"
        onPress={() => setIsSelected(!isSelected)}
        selected={isSelected}
      />
    </StoryContainer>
  )
}

export const Indeterminate = () => {
  const [isSelected, setIsSelected] = useState(true)

  return (
    <StoryContainer title="Indeterminate">
      <Checkbox
        indeterminate
        label="Natura Design System"
        onPress={() => setIsSelected(!isSelected)}
        selected={isSelected}
      />
    </StoryContainer>
  )
}

export const Disabled = () => {
  const [state, setState] = useState({
    disabled: false,
    disabledIndeterminate: true,
    disabledSelected: true
  })

  return (
    <StoryWrapper title="Disabled">
      <StoryContainer title="Disabled selected">
        <Checkbox
          disabled
          label="Natura Design System"
          onPress={() => setState({ ...state, disabledSelected: !state.disabledSelected })}
          selected={state.disabledSelected}
          value="3"
        />
      </StoryContainer>
      <StoryContainer title="Disabled indeterminate">
        <Checkbox
          disabled
          indeterminate
          label="Natura Design System"
          onPress={() => setState({ ...state, disabledIndeterminate: !state.disabledIndeterminate })}
          selected={state.disabledIndeterminate}
          value="2"
        />
      </StoryContainer>
      <StoryContainer title="Disabled unselected">
        <Checkbox
          disabled
          label="Natura Design System"
          onPress={() => setState({ ...state, disabled: !state.disabled })}
          selected={state.disabled}
          value="1"
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Checkbox
      color={select('Color', colorTypes, 'primary') as CheckboxColors}
      indeterminate={boolean('Indeterminate', false)}
      selected={boolean('Selected', true)}
      disabled={boolean('Disabled', false)}
      onPress={() => null}
      label={text('Label', 'Natura Design System')}
      value={text('Value', 'my-label')}
    />
  </StoryContainer>
)
