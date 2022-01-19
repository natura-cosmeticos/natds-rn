import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { View } from 'react-native'
import { ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles'
import {
  ProgressIndicator,
  ProgressIndicatorComponent,
  ProgressIndicatorSizes
} from './ProgressIndicator'

export default {
  component: ProgressIndicatorComponent,
  parameters: {
    componentSubtitle:
      'Progress indicators express an unspecified wait time or display the length of a process.'
  },
  title: 'Components|ProgressIndicator'
}

const sizesTypes = {
  large: 'large',
  medium: 'medium',
  semi: 'semi',
  standard: 'standard'
}

export const all = () => (
  <View style={{ maxWidth: 600 }}>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator />
      </View>
    </ContainerWithTheme>
  </View>
)

export const interactive = () => (
  <View style={{ maxWidth: 600 }}>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator
          size={select('Size', sizesTypes, 'medium') as ProgressIndicatorSizes}
          showLayer={boolean('ShowLayer', false)}
        />
      </View>
    </ContainerWithTheme>
  </View>
)
