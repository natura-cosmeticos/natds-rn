/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native'
import {
  buildTheme,
  getShadowBySize,
  getSizeMedium,
  getSizeSemi,
  getSizeSemiX,
  getSpacingMicro,
  getSpacingSmall,
  getSpacingTiny
} from '../../common/themeSelectors'
import { ButtonBaseProps } from './Button.types'

type SurfaceProps = Pick<ButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size' | 'brand'>
type LabelProps = Pick<ButtonBaseProps, 'iconName' | 'iconPosition' | 'theme' | 'disabled' | 'type' | 'brand'| 'textTransform' >

export const getButtonStylesBySize = ({ size, theme }: Pick<SurfaceProps, 'size' | 'theme'>) => {
  const buttonSize = {
    large: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: getSpacingSmall(theme)
    },
    medium: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: getSpacingSmall(theme)
    },
    semi: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: getSpacingMicro(theme)
    },
    semiX: {
      minHeight: getSizeSemiX(theme),
      paddingHorizontal: getSpacingTiny(theme)
    },
    small: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: getSpacingMicro(theme)
    }
  }

  return size && buttonSize[size]
}

export const getButtonShadowByType = ({ disabled, theme, type }: Omit<SurfaceProps, 'size'>) => (
  type === 'contained' && !disabled
    ? getShadowBySize(theme, 'tiny')
    : { elevation: 0 }
)

const getSelectTheme = ({ theme, type, brand }: Pick<SurfaceProps, 'theme' | 'type' | 'brand'>) => {
  if (brand) {
    const themeSelected = buildTheme(brand, 'light')
    return type && {
      back: themeSelected.button[type].color.enable.background,
      border: themeSelected.button[type].color.enable.border,
      label: themeSelected.button[type].color.enable.label,
      buttonBorderRadius: themeSelected.button.borderRadius
    }
  }
  return type && {
    back: theme.button[type].color.enable.background,
    border: theme.button[type].color.enable.border,
    label: theme.button[type].color.enable.label,
    buttonBorderRadius: theme.button.borderRadius
  }
}

export const Surface = styled.View<SurfaceProps>(({
  disabled = false,
  size,
  theme,
  brand,
  type = 'contained'
}: SurfaceProps) => ({
  ...getButtonStylesBySize({ size, theme }),
  ...getButtonShadowByType({ disabled, theme, type }),
  alignContent: 'center',
  alignItems: 'center',
  background: disabled
    ? theme.button[type].color.disable.background
    : getSelectTheme({ theme, type, brand })?.back,
  borderColor: disabled
    ? theme.button[type].color.disable.border
    : getSelectTheme({ theme, type, brand })?.border,
  borderRadius: getSelectTheme({ theme, type, brand })?.buttonBorderRadius,
  borderWidth: type === 'outlined' ? 1 : 0,
  justifyContent: 'center'
}))

export const Label = styled.View<Pick<LabelProps, 'iconPosition'>>(({ iconPosition }) => ({
  alignItems: 'center',
  flexDirection: iconPosition === 'right' ? 'row' : 'row-reverse'
}))

export const LabelText = styled.Text<LabelProps>(({
  iconName,
  iconPosition,
  type,
  theme,
  brand,
  textTransform,
  disabled = false
}) => ({
  color: disabled ? theme.button[type].color.disable.label : getSelectTheme({ theme, type, brand })?.label,
  fontFamily: theme.button.label.primary.fontFamily,
  fontSize: theme.button.label.fontSize,
  fontWeight: theme.button.label.primary.fontWeight,
  letterSpacing: theme.button.label.letterSpacing,
  lineHeight: 19,
  textTransform,
  marginEnd: iconName && iconPosition === 'right' ? getSpacingTiny(theme) : 0,
  marginStart: iconName && iconPosition === 'left' ? getSpacingTiny(theme) : 0
}))
