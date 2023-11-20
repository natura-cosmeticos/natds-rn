import React from 'react'
import { select, boolean } from '@storybook/addon-knobs'
import { iconNames, IconName } from '@naturacosmeticos/natds-icons'
import { IconButton } from './IconButton'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import {
  iconButtonBackgroundStylesOptions,
  iconButtonSizesOptions,
  iconButtonColorsOptions
} from './IconButton.types'

const extractComponentDescription = () => `
> A button component with an icon from @naturacosmeticos/natds-icons package

## Properties
| Property                | Values                                                        |    Status    |
|---                      |                                                            ---|           ---|
| **variant (no prop)**   | Standard                                                      | ✅ Available |
| **vaccessibilityHint**  | string                                                        | ✅ Available |
| **accessibilityLabel**  | string                                                        | ✅ Available |
| **iconColor**           | primary, highEmphasis, light, default                         | ✅ Available |
| **color**               | primary, highEmphasis, light, default                         | ✅ Available |
| **backgroundStyle**     | none, float, overlay                                          | ✅ Available |
| **disabled**            | true/false                                                    | ✅ Available |
| **icon**                | icon-name                                                     | ✅ Available |
| **size**                | semi, semiX, medium                                           | ✅ Available |
| **onPress**             | function                                                      | ✅ Available |

## Technical Usages Examples
`

export default {
  component: IconButton,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription
    }
  },
  title: 'Components/IconButton'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <IconButton onPress={() => ({})} />
  </StoryContainer>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Standard">
      <IconButton onPress={() => ({})} />
    </StoryContainer>
    <StoryContainer title="Float">
      <IconButton onPress={() => ({})} backgroundStyle="float" />
    </StoryContainer>
    <StoryContainer title="Overlay">
      <IconButton onPress={() => ({})} iconColor="light" backgroundStyle="overlay" />
    </StoryContainer>
    <StoryContainer title="Disabled Standard">
      <IconButton onPress={() => ({})} disabled backgroundStyle="none" />
    </StoryContainer>
    <StoryContainer title="Disabled Float">
      <IconButton onPress={() => ({})} disabled backgroundStyle="float" />
    </StoryContainer>
    <StoryContainer title="Disabled Overlay">
      <IconButton onPress={() => ({})} disabled iconColor="light" backgroundStyle="overlay" />
    </StoryContainer>
  </StoryWrapper>
)

export const Colors = () => (
  <StoryWrapper title="Colors">
    <StoryContainer title="Primary" style={{ backgroundColor: '#eaeaea' }}>
      <IconButton onPress={() => ({})} iconColor="primary" />
    </StoryContainer>
    <StoryContainer title="Light" style={{ backgroundColor: '#eaeaea' }}>
      <IconButton onPress={() => ({})} iconColor="light" />
    </StoryContainer>
    <StoryContainer title="HighEmphasis" style={{ backgroundColor: '#eaeaea' }}>
      <IconButton onPress={() => ({})} iconColor="highEmphasis" />
    </StoryContainer>
  </StoryWrapper>
)

export const Sizes = () => (
  <StoryWrapper title="Sizes">
    <StoryContainer title="Semi">
      <IconButton onPress={() => ({})} size="semi" />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <IconButton onPress={() => ({})} size="semiX" />
    </StoryContainer>
    <StoryContainer title="Medium">
      <IconButton onPress={() => ({})} size="medium" />
    </StoryContainer>
  </StoryWrapper>
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
