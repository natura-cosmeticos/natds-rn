/* eslint-disable max-len */
import styled from 'styled-components/native'
import {
  Theme, getColorPrimary, getColorSurface, getSize
} from '../../common/themeSelectors'
import { ProgressIndicatorSizes } from './ProgressIndicator.types'

type BaseStyleProps = {
  theme: Theme;
}

type LineStyleProps = BaseStyleProps & {
  size: ProgressIndicatorSizes;
}

type ViewStyleProps = BaseStyleProps & {
  size: ProgressIndicatorSizes;
  showLayer: boolean;
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

export const Line = styled(Layer)<{ theme: Theme; size: number }>(
  ({ theme, size }: LineStyleProps) => ({
    borderColor: getColorPrimary(theme),
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
