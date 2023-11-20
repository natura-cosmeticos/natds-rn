import React from 'react'
import { View, Text, Platform } from 'react-native'
import { select, text } from '@storybook/addon-knobs'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'

import { Image } from './Image'
import NatAvatar from '../../assets/images/nat_avatar.jpg'
import { Badge } from '../Badge'
import { Tag } from '../Tag'

const webStoryMessage = Platform.OS === 'web' ? ' (the effect can only be rendered within the native platforms)' : ''

const description = () => `
> Informs the user of image content with possible resources for greater interaction

## Properties
| Property                | Values                                         |    Status    |
|---                      |                                             ---|           ---|
| **variant**             | standard, highlight                            | ✅ Available |
| **radius**              | none, medium, circle                           | ✅ Available |
| **fade**                | top, left, right, bottom                       | ✅ Available |
| **source**              | string, ImageSourcePropType                    | ✅ Available |
| **fallback**            | (is available using the native onError method) | ✅ Available |


## Technical Usages Examples
`

export default {
  component: Image,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Image'
}

export const Default = () => (
  <StoryWrapper title="Default">
    <View style={{ width: 100, height: 100 }}>
      <Image source={NatAvatar} />
    </View>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Standard">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} />
      </View>
    </StoryContainer>
    <StoryContainer title={`Highlight${webStoryMessage}`}>
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" />
      </View>
    </StoryContainer>
  </StoryWrapper>
)

export const Radius = () => (
  <StoryWrapper title="Radius">
    <StoryContainer title="None">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} />
      </View>
    </StoryContainer>
    <StoryContainer title="Medium">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} radius="medium" />
      </View>
    </StoryContainer>
    <StoryContainer title="Circle">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} radius="circle" />
      </View>
    </StoryContainer>
  </StoryWrapper>
)

export const Fade = () => (
  <StoryWrapper title={`Fade${webStoryMessage}`}>
    <StoryContainer title="Left">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="left" />
      </View>
    </StoryContainer>
    <StoryContainer title="Top">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="top" />
      </View>
    </StoryContainer>
    <StoryContainer title="Right">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="right" />
      </View>
    </StoryContainer>
    <StoryContainer title="Bottom">
      <View style={{ width: 100, height: 100 }}>
        <Image source={NatAvatar} variant="highlight" fade="bottom" />
      </View>
    </StoryContainer>
  </StoryWrapper>
)

export const Content = () => (
  <StoryWrapper title="Content">
    <StoryContainer title="Components">
      <View style={{ width: 200, height: 200 }}>
        <Image source={NatAvatar} variant="highlight" fade="top">
          <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <View style={{ alignContent: 'center', justifyContent: 'center', marginRight: 8 }}>
              <Badge variant="pulse" />
            </View>
            <Tag text="Natura Design System" borderPosition="right" color="alert" />
          </View>
        </Image>
      </View>
    </StoryContainer>
    <StoryContainer title="Text">
      <View style={{ width: 200, height: 200 }}>
        <Image source={NatAvatar} variant="highlight" fade="top">
          <Text style={{ color: '#fff' }}>Text, Icons, Components...</Text>
        </Image>
      </View>
    </StoryContainer>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryWrapper title="Interactive">
    <View style={{ width: 300, height: 300 }}>
      <Image
        source={text('Source', NatAvatar)}
        variant={select('Variant', ['standard', 'highlight'], 'standard')}
        fade={select('Fade', ['left', 'top', 'right', 'bottom'], 'bottom')}
        radius={select('Radius', ['none', 'medium', 'circle'], 'none')}
      >
        <Text style={{ color: '#fff' }}>{text('Children', 'Text, Icons, Components...')}</Text>
      </Image>
    </View>
  </StoryWrapper>
)
