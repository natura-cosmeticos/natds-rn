import React, { useState } from 'react'
import { View } from 'react-native'
import { boolean, text } from '@storybook/addon-knobs'

import { RadioButton } from './RadioButton'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'

export default {
  component: RadioButton,
  parameters: {
    componentSubtitle: 'Selection controls allow the user to select options.'
  },
  title: 'Components|RadioButton'
}

export const Default = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <StoryContainer title="Standard">
      <RadioButton
        selected={selected === '1'}
        onPress={setSelected}
        label="Natura Design System"
        value="1"
      />
    </StoryContainer>
  )
}

export const Variants = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <StoryWrapper title="Variants">
      <StoryContainer title="Standard">
        <RadioButton
          color="primary"
          selected={selected === '1'}
          onPress={setSelected}
          label="Natura Design System"
          value="1"
        />
      </StoryContainer>
      <StoryContainer title="Deselected Disabled">
        <RadioButton
          label="Natura Design System"
          disabled
        />
      </StoryContainer>
      <StoryContainer title="Selected Disabled">
        <RadioButton
          selected
          label="Natura Design System"
          disabled
        />
      </StoryContainer>
    </StoryWrapper>
  )
}
export const Brand = () => {
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <StoryWrapper title="Brands">
      <StoryContainer title="Avon">
        <RadioButton
          brand="avon"
          color="primary"
          selected={selected === '1'}
          onPress={setSelected}
          label="Natura Design System"
          value="1"
        />
      </StoryContainer>
      <StoryContainer title="Avon v2">
        <RadioButton
          brand="avon_v2"
          color="primary"
          selected={selected === '1'}
          onPress={setSelected}
          label="Natura Design System"
          value="1"
        />
      </StoryContainer>
    </StoryWrapper>
  )
}

export const Interactive = () => (
  <View style={{ maxWidth: 600, padding: 30 }}>
    <RadioButton
      selected={boolean('Selected', true)}
      disabled={boolean('Disabled', false)}
      onPress={() => null}
      label={text('Label', 'My Label')}
      value={text('Value', 'my-label')}
    />
  </View>
)
