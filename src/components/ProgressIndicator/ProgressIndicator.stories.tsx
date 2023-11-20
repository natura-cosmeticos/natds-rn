import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import { Text, View } from 'react-native'
import { ContainerWithTheme } from '../../common/HelperComponents/ThemeHelper.styles'
import {
  ProgressIndicator,
  ProgressIndicatorComponent
} from './ProgressIndicator'
import { ProgressIndicatorSizes } from './ProgressIndicator.types'

const description = () => `
> Progress indicators express an unspecified wait time or display the length of a process.

## Properties
| Property                | Values                                         |    Status    |
|---                      |                                             ---|           ---|
| **size**                | standard, semi, medium, large                  | ✅ Available |
| **showLayer**           | true/false                                     | ✅ Available |
| **brand**               | avon, avon_v2, natura, natura_v2, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Available        |
## Technical Usages Examples
`

export default {
  component: ProgressIndicatorComponent,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
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
