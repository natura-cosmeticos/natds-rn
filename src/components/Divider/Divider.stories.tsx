import React, { ReactNode } from 'react'
import { View } from 'react-native'
import { StoryFn } from '@storybook/addons'
import { Divider } from './Divider'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'

const description = () => `
> A divider is a thin line that groups content in lists and layouts.

## Properties
| Property                | Values                                         |    Status    |
|---                      |                                             ---|           ---|
| **type**                | fullBleed, inset, middle                       | ✅ Available |


## Technical Usages Examples
`

export default {
  component: Divider,
  parameters: {
    componentSubtitle:
      '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Divider'
}

export const Default: StoryFn<ReactNode> = () => (
  <StoryContainer title="Standard">
    <View
      style={{
        height: 50,
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <Divider />
    </View>
  </StoryContainer>
)

export const Variants: StoryFn<ReactNode> = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="FullBleed">
      <View
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <Divider />
      </View>
    </StoryContainer>
    <StoryContainer title="Inset">
      <View
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <Divider type="inset" />
      </View>
    </StoryContainer>
    <StoryContainer title="Middle">
      <View
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'center'
        }}
      >
        <Divider type="middle" />
      </View>
    </StoryContainer>
  </StoryWrapper>
)
