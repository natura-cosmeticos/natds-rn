import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { Text, View } from 'react-native'
import { ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles'
import {
  ProgressIndicator,
  ProgressIndicatorComponent
} from './ProgressIndicator'
import { ProgressIndicatorSizes } from './ProgressIndicator.types'

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

export const Default = () => (
  <View style={{ maxWidth: 600 }}>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator />
      </View>
    </ContainerWithTheme>
  </View>
)
export const Brands = () => (
  <View style={{ maxWidth: 600, display: 'flex', flexDirection: 'column' }}>
    <Text>Avon v2</Text>
    <ContainerWithTheme>
      <View style={{ margin: 15 }}>
        <ProgressIndicator brand="avon_v2" />
      </View>
    </ContainerWithTheme>
  </View>
)

export const Interactive = () => (
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
