import React from 'react'
import { View } from 'react-native'
import { select, text as textKnob } from '@storybook/addon-knobs'
import { Card, CardTypes } from './Card'
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles'

export default {
  component: Card,
  parameters: {
    componentSubtitle:
      'Cards are surfaces that groups content and actions in the same space. Its construction must always create a visual hierarchy of the content and communicate its purposes clearly.'
  },
  title: 'Components/Card'
}

const cardTypes = {
  base: 'base'
}

export const base = () => (
  <View
    style={{
      alignContent: 'center',
      justifyContent: 'center',
      margin: 32,
      width: 328
    }}
  >
    <TextWithTheme style={{ marginBottom: 8 }}>Base</TextWithTheme>
    <Card>
      <View style={{ minHeight: 192 }} />
    </Card>
  </View>
)

export const interactive = () => (
  <View
    style={{
      alignContent: 'center',
      justifyContent: 'center',
      margin: 32,
      width: 328
    }}
  >
    <TextWithTheme style={{ marginBottom: 8 }}>Interactive</TextWithTheme>
    <Card type={select('Types', cardTypes, 'base') as CardTypes}>
      <View style={{ minHeight: 192 }}>
        <TextWithTheme style={{ margin: 16 }}>
          {textKnob('Content', 'Some content here.')}
        </TextWithTheme>
      </View>
    </Card>
  </View>
)
