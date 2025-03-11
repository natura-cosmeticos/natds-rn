/* eslint-disable max-lines */
import React from 'react'
import { View } from 'react-native'
import { boolean, select, text as textKnob } from '@storybook/addon-knobs'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Button } from './Button'
import { ButtonSizes, ButtonTypes, ITextTransformProp } from './Button.types'

const description = () => `
> Buttons allow users to take actions, and make choices, with a single tap.

## Properties
| Property         | Values                                                                             |    Status           |
|---               |                                                                                 ---|                  ---|
| **type**         | contained, outlined, text                                                          | ✅ Available        |
| **textTranform** | uppercase, lowercase,  capitalize                                                  | 🗂️  Backlog         |
| **size**         | semi, semiX, medium                                                                | ✅ Available        |
| **iconName**     | 'icon_name'                                                                        | ✅ Available        |
| **disabled**     | true, false                                                                        | ✅ Available        |
| **display **     | inline, block                                                                                                | ❌ Not Applicable   |
| **brand**                   | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  component: Button,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Deprecated|Button'
}

const onPress = () => ({})

const buttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text'
}
const buttontextTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize'
}
const buttonSizes = {
  medium: 'medium',
  semi: 'semi',
  semiX: 'semiX'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <Button textTransform="uppercase" onPress={onPress} text="Natura Design System" />
  </StoryContainer>
)
export const Brand = () => (
  <StoryWrapper title="Brands">
    <StoryContainer title="Avon">
      <Button brand="avon" onPress={onPress} text="Natura Design System" />
    </StoryContainer>
    <StoryContainer title="Avon v2">
      <Button brand="avon_v2" onPress={onPress} text="Natura Design System" />
    </StoryContainer>
    <StoryContainer title="Natura V1">
      <Button brand="natura" onPress={onPress} text="Natura Design System" />
    </StoryContainer>
    <StoryContainer title="Natura V2">
      <Button brand="natura_v2" onPress={onPress} text="Natura Design System" />
    </StoryContainer>
    <StoryContainer title="Natura V3">
      <Button brand="natura_v3" onPress={onPress} text="Natura Design System" />
    </StoryContainer>

  </StoryWrapper>
)

export const Sizes = () => (
  <StoryWrapper title="Sizes">
    <StoryContainer title="Medium">
      <Button onPress={onPress} text="Natura Design System" size="medium" />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <Button onPress={onPress} text="Natura Design System" size="semiX" />
    </StoryContainer>
    <StoryContainer title="Semi">
      <Button onPress={onPress} text="Natura Design System" size="semi" />
    </StoryContainer>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Properties">
    <StoryWrapper title="Types">
      <StoryContainer title="Contained">
        <Button onPress={onPress} text="Natura Design System" type="contained" />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <Button onPress={onPress} text="Natura Design System" type="outlined" />
      </StoryContainer>
      <StoryContainer title="Text">
        <Button onPress={onPress} text="Natura Design System" type="text" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Icons">
      <StoryContainer title="Left Icon">
        <Button onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="left" />
      </StoryContainer>
      <StoryContainer title="Right Icon">
        <Button onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="right" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Disabled">
      <StoryContainer title="Contained">
        <Button onPress={onPress} text="Natura Design System" type="contained" disabled />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <Button onPress={onPress} text="Natura Design System" type="outlined" disabled />
      </StoryContainer>
      <StoryContainer title="Text">
        <Button onPress={onPress} text="Natura Design System" type="text" disabled />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Display">
      <StoryContainer title="Display-Inline">
        <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
          <Button onPress={onPress} text="Natura Design System" />
        </View>
      </StoryContainer>
      <StoryContainer title="Display-Block">
        <View style={{ marginBottom: 14, width: '100%' }}>
          <Button onPress={onPress} text="Natura Design System" />
        </View>
      </StoryContainer>
    </StoryWrapper>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Button
      disabled={boolean('Disabled', false)}
      onPress={onPress}
      size={select('Size', buttonSizes, 'semiX') as ButtonSizes}
      text={textKnob('Text', 'Natura Design System')}
      type={select('Types', buttonTypes, 'contained') as ButtonTypes}
      textTransform={select('textTransform', buttontextTransform, 'uppercase') as ITextTransformProp}
    />
  </StoryContainer>
)
