/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native'
import { BrandTypes } from '../../common/brandTypes/brandTypes'
import {
  Theme,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorOnBackground,
  getColorPrimary,
  getColorSecondary,
  getSpacingTiny,
  buildTheme
} from '../../common/themeSelectors'
import { CheckboxColors, CheckboxProps } from './Checkbox.types'

type CheckboxStyleProps = {
  theme: Theme;
}

type BoxStyleProps = CheckboxProps & CheckboxStyleProps

function getBoxColor(
  selected = false,
  disabled: boolean,
  color: CheckboxColors,
  theme: Theme,
  brand?: BrandTypes,
  mode?: 'light' | 'dark'
) {
  if (disabled) {
    return getColorLowEmphasis(theme)
  }

  if (selected) {
    if (brand) {
      const themeSwitch = buildTheme(brand, mode ?? 'light')
      return color === 'secondary' ? getColorSecondary(themeSwitch) : getColorPrimary(themeSwitch)
    }
    return color === 'secondary' ? getColorSecondary(theme) : getColorPrimary(theme)
  }

  return getColorMediumEmphasis(theme)
}

const getlabelColor = (theme: Theme, brand: BrandTypes, mode: 'light' | 'dark') => {
  if (brand) {
    const themeSelectLabel = buildTheme(brand, mode ?? 'light')
    return getColorOnBackground(themeSelectLabel)
  }
  return getColorOnBackground(theme)
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1
})`
  flex-direction: row;
  align-items: center;
`

export const Label = styled.Text<{ theme: Theme; disabled: boolean; brand: BrandTypes; mode: 'light' | 'dark' }>(({
  theme, disabled, brand, mode
}) => ({
  color: disabled ? getColorLowEmphasis(theme) : getlabelColor(theme, brand, mode),
  fontFamily: theme.checkbox.label.primary.fontFamily,
  fontSize: theme.checkbox.label.fontSize,
  fontWeight: theme.checkbox.label.primary.fontWeight,
  letterSpacing: theme.checkbox.label.letterSpacing,
  lineHeight: theme.checkbox.label.fontSize * theme.checkbox.label.lineHeight,
  marginLeft: getSpacingTiny(theme)
}))

export const Box = styled.View<BoxStyleProps>(({
  theme,
  color = 'primary',
  brand,
  mode,
  selected,
  disabled = false
}: BoxStyleProps) => ({
  alignItems: 'center',
  backgroundColor: selected ? getBoxColor(selected, disabled, color, theme, brand, mode) : 'transparent',
  borderColor: getBoxColor(selected, disabled, color, theme, brand, mode),
  borderRadius: theme.checkbox.borderRadius,
  borderWidth: 2,
  height: 20,
  justifyContent: 'center',
  width: 20
}))

export const Wrapper = styled.View(({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 8
}))
