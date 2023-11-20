import React from 'react'
import { View } from 'react-native'
import { boolean, select, text as textKnob } from '@storybook/addon-knobs'
import { Card } from './Card'
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles'
import { CardTypes } from './Card.types'

const description = () => `
> Cards are surfaces that groups content and actions in the same space. Its construction must always create a visual hierarchy of the content and communicate its purposes.

## Properties
| Property                   | Values                                                                                            |    Status           |
|---                         |                                                                                                ---|                  ---|
| **type**                   | base                                                                                              | ✅ Available        |
| **elevation**              | true/false                                                                                        | ✅ Available        |
| **radius**                 | true/false                                                                                        | ✅ Available        |

## Technical Usages Examples
`

export default {
  component: Card,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components/Card'
}

export const Default = () => (
  <View
    style={{
      alignContent: 'center',
      justifyContent: 'center',
      margin: 32,
      width: 328
    }}
  >
    <TextWithTheme style={{ marginBottom: 8 }}>Default</TextWithTheme>
    <Card>
      <View style={{ minHeight: 192 }} />
    </Card>
  </View>
)

export const Interactive = () => (
  <View
    style={{
      alignContent: 'center',
      justifyContent: 'center',
      margin: 32,
      width: 328
    }}
  >
    <TextWithTheme style={{ marginBottom: 8 }}>Interactive</TextWithTheme>
    <Card
      type={select('Types', ['base'], 'base') as CardTypes}
      elevation={boolean('Elevation', true)}
      radius={boolean('Radius', true)}
    >
      <View style={{ minHeight: 192 }}>
        <TextWithTheme style={{ margin: 16 }}>
          {textKnob('Content', 'Some content here.')}
        </TextWithTheme>
      </View>
    </Card>
  </View>
)
