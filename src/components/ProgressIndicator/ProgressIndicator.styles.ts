/* eslint-disable max-len */
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Theme, getColorPrimary, getColorSurface } from '../../common/themeSelectors'

export const View = styled.View<{size: number; showLayer: boolean; theme: Theme}>(
  ({ size, showLayer, theme }) => ({
    alignItems: 'center',
    backgroundColor: showLayer ? getColorSurface(theme) : 'transparent',
    borderRadius: (size + 4) / 2,
    display: 'flex',
    height: size + 4,
    justifyContent: 'center',
    width: size + 4
  })
)

export const Layer = styled.View<{
  size: number;
}>(({ size }) => ({
  height: size,
  width: size
}))

export const Line = styled.View<{ theme: Theme; size: number }>(
  ({ theme, size }) => ({
    borderColor: getColorPrimary(theme),
    borderRadius: size / 2,
    borderWidth: size / 10,
    height: size,
    width: size
  })
)

export const Container = styled.View<{
  size: number;
}>(({ size }) => ({
  height: size / 2,
  overflow: 'hidden',
  width: size
}))

export const Loop = styled.View(() => ({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'center'
}))
