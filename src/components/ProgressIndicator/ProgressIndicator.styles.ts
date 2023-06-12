/* eslint-disable max-len */
import styled from 'styled-components/native'
import { BrandTypes } from '../../common/brandTypes/brandTypes'
import {
  Theme, getColorPrimary, getColorSurface, getSize, buildTheme
} from '../../common/themeSelectors'
import { ProgressIndicatorSizes } from './ProgressIndicator.types'

type BaseStyleProps = {
  theme: Theme;
  brand?: BrandTypes;
}

type LineStyleProps = BaseStyleProps & {
  size: ProgressIndicatorSizes;
  brand?: BrandTypes;
}

type ViewStyleProps = BaseStyleProps & {
  size: ProgressIndicatorSizes;
  showLayer: boolean;
}

const getThemeProgress = (theme: Theme, brand?: BrandTypes) => {
  if (brand) {
    const themeSelected = buildTheme(brand, 'light')
    return getColorPrimary(themeSelected)
  }
  return getColorPrimary(theme)
}

export const Layer = styled.View<{size: number; theme: Theme}>(
  ({ size, theme }) => ({
    height: getSize(theme, size),
    width: getSize(theme, size)
  })
)

export const View = styled(Layer)<{size: number; showLayer: boolean; theme: Theme}>(
  ({ size, showLayer, theme }: ViewStyleProps) => ({
    alignItems: 'center',
    backgroundColor: showLayer ? getColorSurface(theme) : 'transparent',
    borderRadius: (getSize(theme, size) + 4) / 2,
    display: 'flex',
    height: getSize(theme, size) + 4,
    justifyContent: 'center',
    width: getSize(theme, size) + 4
  })
)

export const Line = styled(Layer)<{ theme: Theme; size: number; brand?: BrandTypes }>(
  ({ theme, size, brand }: LineStyleProps) => ({
    borderColor: getThemeProgress(theme, brand),
    borderRadius: theme.progressIndicator[size].borderRadius,
    borderWidth: getSize(theme, size) / 10
  })
)

export const Container = styled(Layer)<{
  size: number; theme: Theme;
}>(({ size, theme }) => ({
  height: getSize(theme, size) / 2,
  overflow: 'hidden'
}))
