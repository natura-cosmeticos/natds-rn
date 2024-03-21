import styled from 'styled-components/native'
import { Color, Theme } from '@naturacosmeticos/natds-themes/react-native'
import { CSSObject } from 'styled-components'

export type ColorViewColors = keyof Color
type PropsColorView = {
  color: ColorViewColors;
  theme: Theme;
}

export const Container = styled.View(({ theme, color = 'primary' }: PropsColorView): CSSObject => ({
  display: 'flex',
  width: '240px',
  height: '40px',
  padding: '5px',
  alignContent: 'center',
  justifyContent: 'center',
  border: '1px solid #ccc',
  backgroundColor: theme.color[color],
  gap: '5px'
}))
export const Grid = styled.View(({ theme, color = 'primary' }: PropsColorView): CSSObject => ({
  display: 'flex',
  width: '320px',
  height: '60px',
  padding: '5px',
  alignContent: 'center',
  justifyContent: 'center',
  backgroundColor: theme.color[color],
  gap: '5px'
}))
export const ColorText = styled.View(({ theme }: PropsColorView): CSSObject => ({
  color: theme.color.lowEmphasis
}))
export const ContainerDeprecated = styled.View(({ theme }: PropsColorView): CSSObject => ({
  boxSizing: 'border-box',
  paddingLeft: '5px',
  borderRadius: 999,
  backgroundColor: theme.color.alert
}))
export const ContainerinternalOnly = styled.View(({ theme }: PropsColorView): CSSObject => ({
  boxSizing: 'border-box',
  paddingLeft: '5px',
  borderRadius: 999,
  backgroundColor: theme.color.info
}))
