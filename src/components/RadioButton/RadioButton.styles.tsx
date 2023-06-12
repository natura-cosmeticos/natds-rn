/* eslint-disable max-len */
/* eslint-disable complexity */
import styled from 'styled-components/native'
import { BrandTypes } from '../../common/brandTypes/brandTypes'
import {
  getColorPrimary,
  Theme,
  getColorSecondary,
  getColorLowEmphasis,
  getColorOnBackground,
  getColorMediumEmphasis,
  getSpacingTiny,
  buildTheme
} from '../../common/themeSelectors'
import { RadioButtonColors } from './RadioButton'

type RadioButtonProps = {
  theme: Theme;
  color: RadioButtonColors;
  selected?: boolean;
  disabled: boolean;
  brand?: BrandTypes;
}

function getCircleColor(
  selected = false,
  disabled: boolean,
  color: RadioButtonColors,
  theme: Theme,
  brand?: BrandTypes
) {
  if (disabled) {
    return getColorLowEmphasis(theme)
  }

  if (selected) {
    if (brand) {
      const themeSwitch = buildTheme(brand, 'light')
      return color === 'secondary' ? getColorSecondary(themeSwitch) : getColorPrimary(themeSwitch)
    }
    return color === 'secondary' ? getColorSecondary(theme) : getColorPrimary(theme)
  }

  return getColorMediumEmphasis(theme)
}

const getlabelColor = (theme: Theme, brand: BrandTypes) => {
  if (brand) {
    const themeSelectLabel = buildTheme(brand, 'light')
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

export const Label = styled.Text<{ theme: Theme; disabled: boolean; brand: BrandTypes }>(({ theme, disabled, brand }) => ({
  color: disabled ? getColorLowEmphasis(theme) : getlabelColor(theme, brand),
  fontFamily: theme.radioButton.label.primary.fontFamily,
  fontSize: theme.radioButton.label.fontSize,
  fontWeight: theme.radioButton.label.primary.fontWeight,
  letterSpacing: theme.radioButton.label.letterSpacing,
  lineHeight: theme.radioButton.label.fontSize * theme.radioButton.label.lineHeight,
  marginLeft: getSpacingTiny(theme)
}))

export const Circle = styled.View<RadioButtonProps>(({
  theme,
  color,
  selected,
  disabled,
  brand
}: RadioButtonProps) => ({
  alignItems: 'center',
  borderColor: getCircleColor(selected, disabled, color, theme, brand),
  borderRadius: 12,
  borderWidth: '2px',
  height: 20,
  justifyContent: 'center',
  width: 20
}))

export const Center = styled.View<RadioButtonProps>(({
  theme,
  color,
  selected,
  disabled,
  brand
}: RadioButtonProps) => ({
  backgroundColor: getCircleColor(selected, disabled, color, theme, brand),
  borderRadius: `${theme.radioButton.borderRadius}px`,
  height: 10,
  width: 10
}))

export const Wrapper = styled.View(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 8
}))
