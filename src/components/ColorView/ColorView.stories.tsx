/* eslint-disable no-restricted-syntax */
import React from 'react'
import { Color } from '@naturacosmeticos/natds-themes/react-native'
import ColorView from './ColorView'
import { buildTheme } from '../../common/themeSelectors'

const description = () => `
> Colors are used to identify a user.

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
  component: <>Colors</>,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components/ColorView'
}

const keysToRemove = ['neutral50',
  'neutral100', 'neutral200',
  'neutral300', 'neutral400',
  'neutral500', 'neutral600',
  'neutral700', 'neutral800',
  'neutral900'
]
function removeKeys(obj: Color) {
  for (const key of keysToRemove) {
    if (obj[key]) {
      // eslint-disable-next-line no-param-reassign
      delete obj[key]
    }
  }
  return obj
}

export const ColorViews = () => {
  const theme = buildTheme('natura', 'light')
  const { color } = theme
  const ArrayTheme = Object.entries(removeKeys(color))

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '30px' }}>
      {
        ArrayTheme.map((label) => <ColorView labelToken={label[0]} keyToken={label[1]} />)

      }
    </div>
  )
}
