/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable max-lines */
import React from 'react'
import { View } from 'react-native'
import { boolean, select, text as textKnob } from '@storybook/addon-knobs'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { GayaButton } from './GayaButton'
import {
  GayaButtonColor, GayaButtonSizes, GayaButtonTypes, ITextTransformProp
} from './GayaButton.types'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

const description = () => `
> Buttons allow users to take actions, and make choices, with a single tap.

## Properties
| Property         | Values                                                                             |    Status           |
|---               |                                                                                 ---|                  ---|
| **type**         | contained, outlined, ghost, tonal                                                  | ✅ Available        |
| **textTranform** | uppercase, lowercase,  capitalize                                                  | 🗂️  Backlog         |
| **size**         | semi, semiX, medium                                                                | ✅ Available        |
| **iconName**     | 'icon_name'                                                                        | ✅ Available        |
| **disabled**     | true, false                                                                        | ✅ Available        |
| **display **     | inline, block                                                                      | ❌ Not Applicable   |
| **brand**                   | avon, avon_v2, natura, natura_v2, natura_v3, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |

## Technical Usages Examples
`

export default {
  component: GayaButton,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|GayaButton'
}

const onPress = () => ({})

const GayabuttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  ghost: 'ghost',
  tonal: 'tonal'
}
const GayabuttontextTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize'
}
const GayabuttonSizes = {
  medium: 'medium',
  semi: 'semi',
  semiX: 'semiX'
}
const brand = {
  undefined,
  avon: 'avon',
  avon_v2: 'avon_v2',
  natura: 'natura',
  natura_v2: 'natura_v2',
  natura_v3: 'natura_v3',
  theBodyShop: 'theBodyShop',
  consultoriaDeBeleza: 'consultoriaDeBeleza',
  casaEestilo: 'casaEestilo'
}
const mode = {
  undefined,
  light: 'light',
  dark: 'dark'
}
const GayabuttonColor = {
  primary: 'primary',
  onPrimary: 'onPrimary',
  secondary: 'secondary',
  onSecondary: 'onSecondary',
  neutral: 'neutral',
  inverse: 'inverse'
}
type mode = 'light' | 'dark' | undefined
export const Default = () => (
  <StoryContainer title="Standard">
    <GayaButton onPress={onPress} text="Natura Design System" />
  </StoryContainer>
)
export const Brand = () => (
  <StoryWrapper title="Brands">
    <StoryContainer title="Avon">
      <GayaButton brand="avon" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="avon" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="avon" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="avon" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Avon v2">
      <GayaButton brand="avon_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="avon_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="avon_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="avon_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V1">
      <GayaButton brand="natura" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="natura" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="natura" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="natura" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V2">
      <GayaButton brand="natura_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V3">
      <GayaButton brand="natura_v3" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v3" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v3" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v3" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Casa & Estilo">
      <GayaButton brand="casaEestilo" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza">
      <GayaButton brand="consultoriaDeBeleza" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>

  </StoryWrapper>
)

export const Sizes = () => (
  <StoryWrapper title="Sizes">
    <StoryContainer title="Medium">
      <GayaButton onPress={onPress} text="Natura Design System" size="medium" />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <GayaButton onPress={onPress} text="Natura Design System" size="semiX" />
    </StoryContainer>
    <StoryContainer title="Semi">
      <GayaButton onPress={onPress} text="Natura Design System" size="semi" />
    </StoryContainer>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Properties">
    <StoryWrapper title="Types">
      <StoryContainer title="Contained">
        <GayaButton onPress={onPress} text="Natura Design System" type="contained" />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <GayaButton onPress={onPress} text="Natura Design System" type="outlined" />
      </StoryContainer>
      <StoryContainer title="ghost">
        <GayaButton color="primary" onPress={onPress} text="Natura Design System" type="ghost" />
      </StoryContainer>
      <StoryContainer title="tonal">
        <GayaButton onPress={onPress} text="Natura Design System" type="tonal" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Icons">
      <StoryContainer title="Left Icon">
        <GayaButton onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="left" />
      </StoryContainer>
      <StoryContainer title="Right Icon">
        <GayaButton onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="right" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Disabled">
      <StoryContainer title="Contained">
        <GayaButton onPress={onPress} text="Natura Design System" type="contained" disabled />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <GayaButton onPress={onPress} text="Natura Design System" type="outlined" disabled />
      </StoryContainer>
      <StoryContainer title="ghost">
        <GayaButton onPress={onPress} text="Natura Design System" type="ghost" disabled />
      </StoryContainer>
      <StoryContainer title="tonal">
        <GayaButton onPress={onPress} text="Natura Design System" type="tonal" disabled />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Display">
      <StoryContainer title="Display-Inline">
        <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
          <GayaButton onPress={onPress} text="Natura Design System" />
        </View>
      </StoryContainer>
      <StoryContainer title="Display-Block">
        <View style={{ marginBottom: 14, width: '100%' }}>
          <GayaButton onPress={onPress} text="Natura Design System" />
        </View>
      </StoryContainer>
    </StoryWrapper>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <GayaButton
      disabled={boolean('Disabled', false)}
      onPress={onPress}
      brand={select('brand', brand, undefined) as BrandTypes}
      mode={select('mode', mode, undefined) as mode}
      size={select('Size', GayabuttonSizes, 'semiX') as GayaButtonSizes}
      text={textKnob('Text', 'Natura Design System')}
      type={select('Types', GayabuttonTypes, 'contained') as GayaButtonTypes}
      color={select('Color', GayabuttonColor, 'primary') as GayaButtonColor}
      textTransform={select('textTransform', GayabuttontextTransform, 'uppercase') as ITextTransformProp}
    />
  </StoryContainer>
)
