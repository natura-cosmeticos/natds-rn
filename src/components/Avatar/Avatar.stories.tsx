import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { IconName, iconNames } from '@naturacosmeticos/natds-icons'

import { AvatarTypes, AvatarSizes } from './Avatar.types'
import NatAvatar from '../../assets/images/nat_avatar.jpg'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Avatar } from '.'

const description = () => `
> Avatars are used to identify a user.

## Properties
| Property                   | Values                                                                                            |    Status           |
|---                         |                                                                                                ---|                  ---|
| **size**                   | standard, medium, semiX, tiny, small, semi, large, largeXXX, huge                                 | ✅ Available        |
| **accessibilityLabel**     | string                                                                                            | ✅ Available        |
| **accessibilityHint**      | string                                                                                            | ✅ Available        |
| **type**                   | image, icon, letter, anonymous                                                                    | ✅ Available        |
| **imgSource**              | string, uri: string   (available only in image type)                                              | ✅ Available        |
| **text**                   | string, (available only in letter type)                                                           | ✅ Available        |
| **iconName**               | icon-name, (available only in icon type)                                                          | ✅ Available        |
| **brand**                  | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |


## Technical Usages Examples
`

export default {
  component: Avatar,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components/Avatar'
}

const textSample = 'Design System'
const iconSample = 'outlined-default-mockup'

const avatarTypes = {
  icon: 'icon',
  image: 'image',
  letter: 'letter'
}

const avatarSizes = {
  largeXXX: 'largeXXX',
  medium: 'medium',
  semi: 'semi',
  semiX: 'semiX',
  standard: 'standard'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <Avatar />
  </StoryContainer>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Image">
      <Avatar type="image" size="medium" imgSource={NatAvatar} />
    </StoryContainer>
    <StoryContainer title="Letter">
      <Avatar type="letter" size="medium" text={textSample} />
    </StoryContainer>
    <StoryContainer title="Icon">
      <Avatar type="icon" size="medium" iconName={iconSample} />
    </StoryContainer>
  </StoryWrapper>
)
export const Brands = () => (
  <StoryWrapper title="Brands">
    <StoryContainer title="Avon">
      <Avatar brand="avon" type="letter" size="medium" text={textSample} />
    </StoryContainer>
    <StoryContainer title="Avon v2">
      <Avatar brand="avon_v2" type="letter" size="medium" text={textSample} />
    </StoryContainer>
    <StoryContainer title="Avon">
      <Avatar brand="avon" type="icon" size="medium" iconName={iconSample} />
    </StoryContainer>
    <StoryContainer title="Avon v2">
      <Avatar brand="avon_v2" type="icon" size="medium" iconName={iconSample} />
    </StoryContainer>
  </StoryWrapper>
)

export const Sizes = () => (
  <StoryWrapper title="Sizes">
    <StoryContainer title="Standard">
      <Avatar type="icon" size="standard" iconName={iconSample} />
    </StoryContainer>
    <StoryContainer title="Semi">
      <Avatar type="icon" size="semi" iconName={iconSample} />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <Avatar type="icon" size="semiX" iconName={iconSample} />
    </StoryContainer>
    <StoryContainer title="Medium">
      <Avatar type="icon" size="medium" iconName={iconSample} />
    </StoryContainer>
    <StoryContainer title="LargeXXX">
      <Avatar type="icon" size="largeXXX" iconName={iconSample} />
    </StoryContainer>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Avatar
      type={select('Type', avatarTypes, 'icon') as AvatarTypes}
      text={text('Text', 'Natura Design System')}
      imgSource={text('URL', '')}
      iconName={select('IconName', iconNames as Array<IconName>, 'outlined-default-mockup' as IconName)}
      size={select('Size', avatarSizes, 'medium') as AvatarSizes}
    />
  </StoryContainer>
)
