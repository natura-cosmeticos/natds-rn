import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { iconNames, IconName } from '@naturacosmeticos/natds-icons'
import { IconButton } from './IconButton'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'
import {
  iconButtonBackgroundStylesOptions,
  iconButtonSizesOptions,
  iconButtonColorsOptions
} from './IconButton.types'

const extractComponentDescription = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - **Icon Color:**
    - ✅ \`Hight Emphasis\`
    - ✅ \`Primary\`
    - ✅ \`Light\`
  - **Background Style:**
    - ✅ \`None (inherit)\`
    - ✅ \`Float\`
    - ✅ \`Overlay\`
  - ✅ **Disabled**
  - **Size:**
    - ✅ \`Semi\`
    - ✅ \`SemiX\`
    - ✅ \`Medium\`
  - ✅ **OnPress (OnClick)**
  - ✅ **Icon**

- - -
`

export default {
  component: IconButton,
  parameters: {
    componentSubtitle: 'A button component with an icon from @naturacosmeticos/natds-icons package',
    docs: {
      extractComponentDescription
    }
  },
  title: 'Components/IconButton'
}

export const Base = () => (
  <StoryContainer title="Base">
    <IconButton onPress={() => ({})} />
  </StoryContainer>
)

export const IconColor = () => (
  <StoryContainer title="IconColor" style={{ backgroundColor: '#eaeaea' }}>
    <IconButton onPress={() => ({})} iconColor="highEmphasis" />
    <IconButton onPress={() => ({})} iconColor="primary" />
    <IconButton onPress={() => ({})} iconColor="light" />
  </StoryContainer>
)

export const BackgroundStyle = () => (
  <StoryContainer title="BackgroundStyle">
    <IconButton onPress={() => ({})} iconColor="highEmphasis" backgroundStyle="none" />
    <IconButton onPress={() => ({})} iconColor="primary" backgroundStyle="float" />
    <IconButton onPress={() => ({})} iconColor="light" backgroundStyle="overlay" />
  </StoryContainer>
)

export const Disabled = () => (
  <StoryContainer title="Disabled">
    <IconButton onPress={() => ({})} disabled iconColor="highEmphasis" backgroundStyle="none" />
    <IconButton onPress={() => ({})} disabled iconColor="primary" backgroundStyle="float" />
    <IconButton onPress={() => ({})} disabled iconColor="light" backgroundStyle="overlay" />
  </StoryContainer>
)

export const Size = () => (
  <StoryContainer title="Sizes">
    <IconButton onPress={() => ({})} size="semi" />
    <IconButton onPress={() => ({})} size="semiX" />
    <IconButton onPress={() => ({})} size="medium" />
  </StoryContainer>
)

export const Icon = () => (
  <StoryContainer title="Icon">
    <IconButton onPress={() => ({})} size="medium" icon="outlined-finance-charging" />
    <IconButton onPress={() => ({})} size="medium" icon="outlined-place-forklift" />
    <IconButton onPress={() => ({})} size="medium" icon="outlined-social-network" />
  </StoryContainer>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <IconButton
      iconColor={select('Colors', iconButtonColorsOptions, 'default')}
      icon={select('Icon name', iconNames as Array<IconName>, 'outlined-finance-bank' as IconName)}
      size={select('Sizes', iconButtonSizesOptions, 'small')}
      disabled={boolean('Disabled', false)}
      onPress={() => ({})}
      backgroundStyle={select('BackgroundStyle', iconButtonBackgroundStylesOptions, iconButtonBackgroundStylesOptions.none)}
    />
  </StoryContainer>
)
