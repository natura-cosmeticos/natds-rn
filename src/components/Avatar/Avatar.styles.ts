/* eslint-disable max-len */
import styled from 'styled-components/native'
import {
  Theme, getColorOnPrimary, getColorPrimary, getAvatarBySize, buildTheme
} from '../../common/themeSelectors'
import { AvatarSizes } from './Avatar.types'
import { Icon } from '../Icon/Icon'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

interface AvatarStyleProps {
  size: AvatarSizes;
  theme: Theme;
  brand?: BrandTypes;
}

// List of deprecated sizes used to conditionally render the avatar
const deprecatedSizes = ['tiny', 'small', 'large', 'huge']

const getAvatarFontSize = (theme, size) => getAvatarBySize(size, theme).fontSize

const getAvatarSize = (theme, size) => getAvatarBySize(size, theme).size

const getBorderRadiusBySize = (size: AvatarSizes, theme: Theme) => {
  if (!deprecatedSizes.includes(size)) {
    return {
      borderRadius: theme.avatar[size].borderRadius,
      height: theme.size[size],
      width: theme.size[size]
    }
  }

  return {
    borderRadius: getAvatarSize(theme, size),
    height: getAvatarSize(theme, size),
    width: getAvatarSize(theme, size)
  }
}

const getFontsBySize = (size: AvatarSizes, theme: Theme) => {
  if (!deprecatedSizes.includes(size)) {
    return {
      fontSize: theme.avatar[size].fontSize,
      letterSpacing: theme.avatar[size].letterSpacing,
      lineHeight: theme.avatar[size].fontSize * theme.avatar[size].lineHeight
    }
  }

  return { fontSize: getAvatarFontSize(theme, size) }
}

const getThemeSelect = (theme: Theme, brand?: BrandTypes) => {
  if (brand) {
    console.log(brand)
    const themeSelectAvathar = buildTheme(brand, 'light')
    return {
      back: getColorPrimary(themeSelectAvathar),
      label: getColorOnPrimary(themeSelectAvathar)
    }
  }
  return {
    back: getColorPrimary(theme),
    label: getColorOnPrimary(theme)
  }
}

export const Container = styled.View(({ size, theme, brand }: AvatarStyleProps) => ({
  ...getBorderRadiusBySize(size, theme),
  alignItems: 'center',
  backgroundColor: getThemeSelect(theme, brand).back,
  justifyContent: 'center'
}))

export const AvatarImage = styled.Image(({ size, theme }: AvatarStyleProps) => ({
  ...getBorderRadiusBySize(size, theme)
}))

export const AvatarLetter = styled.Text(({ size, theme, brand }: AvatarStyleProps) => ({
  ...getFontsBySize(size, theme),
  alignSelf: 'center',
  color: getThemeSelect(theme, brand).label,
  fontFamily: theme.avatar.primary.fontFamily,
  fontWeight: theme.avatar.primary.fontWeight
}))

export const AvatarIcon = styled(Icon)(({ theme, brand }) => ({
  color: getThemeSelect(theme, brand).label
}))
