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
import { GayaButtonBaseProps } from './GayaButton.types'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

type SurfaceProps = Pick<GayaButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size' | 'brand' | 'color' | 'mode'>
type LabelProps = Pick<GayaButtonBaseProps, 'iconName' | 'iconPosition' | 'theme' | 'disabled' | 'type' | 'brand'| 'textTransform' | 'color' | 'mode' >

export const getButtonStylesBySize = ({
  size, theme, brand, mode
}: Pick<SurfaceProps, 'size' | 'theme' | 'brand' | 'mode'>) => {
  if (brand) {
    const colorThemeBrand = buildTheme(brand, mode)
    const buttonSizesBrand = {
      large: {
        minHeight: getSizeMedium(colorThemeBrand),
        paddingHorizontal: getSpacingSmall(colorThemeBrand)
      },
      medium: {
        minHeight: getSizeMedium(colorThemeBrand),
        paddingHorizontal: getSpacingSmall(colorThemeBrand)
      },
      semi: {
        minHeight: getSizeSemi(colorThemeBrand),
        paddingHorizontal: getSpacingMicro(colorThemeBrand)
      },
      semiX: {
        minHeight: getSizeSemiX(colorThemeBrand),
        paddingHorizontal: colorThemeBrand.button.paddingX
      },
      small: {
        minHeight: getSizeSemi(colorThemeBrand),
        paddingHorizontal: getSpacingMicro(colorThemeBrand)
      }
    }
    return size && buttonSizesBrand[size]
  }
  const buttonSizes = {
    large: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: theme.button.paddingX
    },
    medium: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: theme.button.paddingX
    },
    semi: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: theme.button.paddingX
    },
    semiX: {
      minHeight: getSizeSemiX(theme),
      paddingHorizontal: theme.button.paddingX
    },
    small: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: theme.button.paddingX
    }
  }
  return size && buttonSizes[size]
}

export const getButtonShadowByType = ({ disabled, theme, type }: Omit<SurfaceProps, 'size'>) => (
  type === 'contained' && !disabled
    ? getShadowBySize(theme, 'none')
    : { elevation: 0 }
)

export const getSelectTheme = (brand: BrandTypes | undefined, {
  theme, type, color, mode
}: Pick<SurfaceProps, 'theme' | 'type' | 'color' | 'mode'>) => {
  if (brand) {
    const colorTheme = buildTheme(brand, mode)
    let propBrandsColor = {}
    if (type && color) {
      propBrandsColor = {
        back: colorTheme.button[type].color[color].background,
        border: colorTheme.button[type].color[color].border,
        label: colorTheme.button[type].color[color].label,
        buttonBorderRadius: colorTheme.button.borderRadius,
        textransform: colorTheme.button.textTransform
      }
      return type && {
        ...propBrandsColor
      }
    }
  }

  return (type && color) && {
    back: theme.button[type].color[color].background,
    border: theme.button[type].color[color].border,
    label: theme.button[type].color[color].label,
    buttonBorderRadius: theme.button.borderRadius,
    textransform: theme.button.textTransform
  }
}

export const Surface = styled.View<SurfaceProps>(({
  disabled = false,
  size,
  theme,
  color,
  brand,
  mode,
  type = 'contained'
}: SurfaceProps) => ({
  ...getButtonStylesBySize({
    size, theme, brand, mode
  }),
  ...getButtonShadowByType({ disabled, theme, type }),
  alignContent: 'center',
  alignItems: 'center',
  background: disabled
    ? theme.color.surfaceDisabled
    : getSelectTheme(brand, {
      theme, type, color, mode
    })?.back,
  borderColor: disabled
    ? theme.color.surfaceDisabled
    : getSelectTheme(brand, {
      theme, type, color, mode
    })?.border,
  borderRadius: getSelectTheme(brand, {
    theme, type, color, mode
  })?.buttonBorderRadius,
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
  color,
  theme,
  brand,
  mode,
  textTransform,
  disabled = false
}) => ({
  color: disabled ? theme.color.onSurfaceDisabled : getSelectTheme(brand, {
    theme, type, color, mode
  })?.label,
  fontFamily: theme.button.label.primary.fontFamily,
  fontSize: theme.button.label.fontSize,
  fontWeight: theme.button.label.primary.fontWeight,
  letterSpacing: theme.button.label.letterSpacing,
  lineHeight: 19,
  textTransform: textTransform || getSelectTheme(brand, {
    theme, type, color, mode
  })?.textransform,
  marginEnd: iconName && iconPosition === 'right' ? getSpacingTiny(theme) : 0,
  marginStart: iconName && iconPosition === 'left' ? getSpacingTiny(theme) : 0
}))
