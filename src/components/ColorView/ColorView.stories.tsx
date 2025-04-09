/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react'
import { Color } from '@naturacosmeticos/natds-themes/react-native'
import { addons } from '@storybook/addons'
import ColorView from './ColorView'
import { buildTheme } from '../../common/themeSelectors'
import { CHANGE, getStoryBookTheme } from '../../../storybook-web/addons/theme/shared.js'

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
  title: 'Colors|Themes'
}

const keysToRemove = [
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
  const mode = getStoryBookTheme()
  const theme = buildTheme('natura', 'light')
  const [themeAll, setThemeAll] = useState(theme)
  const channel = addons.getChannel()
  useEffect(() => {
    // Defina a função ouvinte fora de channel.on
    const handleChange = ({ type, name }) => {
      setThemeAll(buildTheme(name, type))
    }

    // Registre o ouvinte
    channel.on(CHANGE, handleChange)

    // Limpeza: remova o ouvinte usando a mesma função
    return () => {
      channel.removeListener(CHANGE, handleChange)
    }
  }, [channel, mode])

  const { color } = themeAll
  const ArrayTheme = Object.entries(removeKeys(color))
  const deprecatedColor = [
    'highEmphasis',
    'mediumEmphasis',
    'lowEmphasis',
    'highlight',
    'surfaceInverse',
    'onSurfaceInverse',
    'link',
    'onLink'

  ]
  const internalOnlyLabels = [
    'primitiveLightGray50',
    'primitiveLightGray100',
    'primitiveLightGray200',
    'primitiveLightGray300',
    'primitiveLightGray400',
    'primitiveLightGray500',
    'primitiveLightGray600',
    'primitiveLightGray700',
    'primitiveLightGray800',
    'primitiveLightGray900',
    'primitiveDarkGray50',
    'primitiveDarkGray100',
    'primitiveDarkGray200',
    'primitiveDarkGray300',
    'primitiveDarkGray400',
    'primitiveDarkGray500',
    'primitiveDarkGray600',
    'primitiveDarkGray700',
    'primitiveDarkGray800',
    'primitiveDarkGray900',
    'primitiveBlack',
    'primitiveWhite'
  ]

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '30px' }}>
      {
        ArrayTheme.map((label) => {
          if (deprecatedColor.some((dep) => label[0].includes(dep))) {
            return <ColorView deprecated labelToken={label[0]} keyToken={label[1]} />
          }
          if (internalOnlyLabels.some((dep) => label[0].includes(dep))) {
            return <ColorView internalOnly labelToken={label[0]} keyToken={label[1]} />
          }
          return <ColorView labelToken={label[0]} keyToken={label[1]} />
        })

      }
    </div>
  )
}
