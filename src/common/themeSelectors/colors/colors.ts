import { Color } from '@naturacosmeticos/natds-themes/react-native'
import { Theme, checkTheme } from '../theme/theme'

const getColors = (theme: Theme) => checkTheme(theme).color

export const getColorPrimary = (theme: Theme) => getColors(theme).primary
export const getColorOnPrimary = (theme: Theme) => getColors(theme).onPrimary
export const getColorPrimaryLight = (theme: Theme) => getColors(theme).primaryLight

export const getColorSecondary = (theme: Theme) => getColors(theme).secondary
export const getColorOnSecondary = (theme: Theme) => getColors(theme).onSecondary

export const getColorBackground = (theme: Theme) => getColors(theme).background
export const getColorOnBackground = (theme: Theme) => getColors(theme).onBackground

export const getColorSuccess = (theme: Theme) => getColors(theme).success
export const getColorOnSuccess = (theme: Theme) => getColors(theme).onSuccess

export const getColorAlert = (theme: Theme) => getColors(theme).alert
export const getColorOnAlert = (theme: Theme) => getColors(theme).onAlert

export const getColorLowEmphasis = (theme: Theme) => getColors(theme).lowEmphasis
export const getColorMediumEmphasis = (theme: Theme) => getColors(theme).mediumEmphasis
export const getColorHighEmphasis = (theme: Theme) => getColors(theme).highEmphasis

export const getColorSurface = (theme: Theme) => getColors(theme).surface
export const getColorOnSurface = (theme: Theme) => getColors(theme).onSurface

export const getColorHighlight = (theme: Theme) => getColors(theme).highlight

export const getColorLink = (theme: Theme) => getColors(theme).link

export const getColorByName = (theme: Theme, colorName: keyof Color) => getColors(theme)[colorName]
