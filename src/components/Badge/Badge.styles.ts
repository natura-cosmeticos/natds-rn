import styled from 'styled-components/native'
import { CSSObject } from 'styled-components'
import {
  buildTheme,
  Theme
} from '../../common/themeSelectors'

import { BadgeColors } from './Badge.types'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

type BadgeStyleProps = {
  color: BadgeColors;
  variant: BadgeVariant;
  theme: Theme;
  brand?: BrandTypes;
}

export type BadgeVariant = 'standard' | 'pulse' | 'dot'

const getThemeBadge = (theme: Theme) => ({ color, brand }: Pick<BadgeStyleProps, 'brand'|'color' >) => {
  if (brand) {
    const themeSelected = buildTheme(brand, 'light')
    return {
      back: themeSelected.badge.color[color].background,
      label: themeSelected.badge.color[color].label
    }
  }
  return {
    back: theme.badge.color[color].background,
    label: theme.badge.color[color].label
  }
}
export const convertPulseToDot = (variant: BadgeVariant) => (variant === 'pulse' ? 'dot' : variant)

export const getHorizontalPadding = (variant: BadgeVariant, theme: Theme) => (
  variant === 'standard' && {
    paddingHorizontal: theme.spacing.micro
  }
)

export const getWidthByVariant = (variant: BadgeVariant, theme: Theme) => (
  variant !== 'standard' && {
    width: theme.badge[convertPulseToDot(variant)].height
  }
)

export const Container = styled.View(() => ({
  alignContent: 'center',
  alignItems: 'center'
}))

export const BadgeBase = styled.View(({
  theme, color, variant = 'standard', brand
}: BadgeStyleProps): CSSObject => ({
  ...getWidthByVariant(variant, theme),
  backgroundColor: getThemeBadge(theme)({ color, brand }).back,
  borderRadius: theme.badge[convertPulseToDot(variant)].borderRadius,
  height: theme.badge[convertPulseToDot(variant)].height
}))

export const Circle = styled(BadgeBase)(({ theme, variant = 'standard' }: BadgeStyleProps): CSSObject => ({
  ...getHorizontalPadding(variant, theme),
  alignContent: 'center',
  justifyContent: 'center'
}))

export const Label = styled.Text(({
  theme, color, variant = 'standard', brand
}: BadgeStyleProps): CSSObject => ({
  color: getThemeBadge(theme)({ color, brand }).label,
  fontFamily: theme.badge.label.primary.fontFamily,
  fontSize: theme.badge.label.fontSize,
  fontWeight: theme.badge.label.primary.fontWeight,
  letterSpacing: theme.badge.label.letterSpacing,
  lineHeight: theme.badge[convertPulseToDot(variant)].height,
  textAlignVertical: 'center'
}))
