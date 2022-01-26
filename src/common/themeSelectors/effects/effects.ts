import { Elevation, Theme } from '@naturacosmeticos/natds-themes/react-native'
import { checkTheme } from '../theme/theme'

const getElevation = (theme: Theme) => checkTheme(theme).elevation

export const getShadowBySize = (theme: Theme, size: keyof Elevation) => {
  const {
    elevation,
    shadowColor,
    shadowOffsetHeight,
    shadowOffsetWidth,
    shadowOpacity,
    shadowRadius
  } = getElevation(theme)[size]

  return {
    elevation,
    shadowColor,
    shadowOffset: `${shadowOffsetWidth}px ${shadowOffsetHeight}px`,
    shadowOpacity,
    shadowRadius
  }
}
