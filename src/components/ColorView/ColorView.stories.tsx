/* eslint-disable no-restricted-syntax */
import React from 'react'
import { Color } from '@naturacosmeticos/natds-themes/react-native'
import ColorView from './ColorView'
import { buildTheme } from '../../common/themeSelectors'

const description = () => `
> Colors from theme.
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
