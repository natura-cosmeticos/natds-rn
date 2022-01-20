import { IconColors, IconSizes } from '../Icon/Icon.types'
import {
  getColorByName,
  buildColorWithOpacity,
  getColorHighlight,
  getOpacityVeryHigh,
  getShadowBySize,
  Theme
} from '../../common/themeSelectors'
import {
  IconButtonColors,
  IconContainerProps,
  IconButtonBackgroundStyle,
  IconButtonSizes
} from './IconButton.types'

export const getContainerBackgroundColor = ({
  theme,
  backgroundStyle,
  disabled
}: Omit<IconContainerProps, 'size'> & { theme: Theme }) => {
  const float = disabled
    ? getColorByName(theme, 'lowEmphasis')
    : getColorByName(theme, 'surface')

  const backgroundColor: { [keys in IconButtonBackgroundStyle]: string } = {
    float,
    none: 'transparent',
    overlay: buildColorWithOpacity(getColorHighlight, getOpacityVeryHigh, theme)
  }

  return backgroundColor[backgroundStyle]
}

export const getIconSize = (size: IconButtonSizes) => {
  const iconSize: { [keys in IconButtonSizes]: IconSizes } = {
    medium: 'semiX',
    semi: 'standard',
    semiX: 'semi',
    small: 'standard'
  }

  return iconSize[size]
}

export const getIconColor = (color: IconButtonColors, disabled: boolean) => {
  const highEmphasis = disabled ? 'mediumEmphasis' : 'highEmphasis'

  const iconColor: Record<IconButtonColors, IconColors> = {
    default: highEmphasis,
    highEmphasis,
    light: disabled ? 'lowEmphasis' : 'surface',
    primary: disabled ? 'mediumEmphasis' : 'primary'
  }

  return iconColor[color]
}

export const getContainerElevation = (
  backgroundStyle: IconButtonBackgroundStyle,
  theme: Theme
) => (
  backgroundStyle === 'float'
    ? getShadowBySize(theme, 'micro')
    : {}
)
