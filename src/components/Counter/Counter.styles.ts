import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import { CSSObject } from 'styled-components'
import styled from 'styled-components/native'
import {
  getBorderRadiusMedium,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getSize,
  getSizeMediumX,
  getSpacingMicro,
  getSpacingSmall
} from '../../common/themeSelectors'
import { CounterSizes } from './Counter.types'

export const Label = styled.Text<{ theme: Theme }>(({ theme }): CSSObject => ({
  color: getColorMediumEmphasis(theme),
  fontFamily: theme.counter.label.primary.fontFamily,
  fontSize: theme.counter.label.fontSize,
  fontWeight: theme.counter.label.primary.fontWeight,
  letterSpacing: theme.counter.label.letterSpacing,
  lineHeight: theme.counter.label.fontSize * theme.counter.label.lineHeight,
  marginBottom: getSpacingMicro(theme)
}))

export const Container = styled.View<{
  size: CounterSizes; theme: Theme;
}>(({ size, theme }): CSSObject => ({
  alignItems: 'center',
  alignSelf: 'flex-start',
  backgroundColor: getColorSurface(theme),
  borderColor: getColorLowEmphasis(theme),
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth: 1,
  flexDirection: 'row',
  height: getSize(theme, size)
}))

export const Input = styled.TextInput<{ theme: Theme }>(({ theme }): CSSObject => ({
  borderColor: getColorLowEmphasis(theme),
  borderLeftWidth: 1,
  borderRightWidth: 1,
  color: getColorHighEmphasis(theme),
  fontFamily: theme.counter.content.primary.fontFamily,
  fontSize: theme.counter.content.fontSize,
  fontWeight: theme.counter.content.primary.fontWeight,
  height: '100%',
  letterSpacing: theme.counter.content.letterSpacing,
  lineHeight: theme.counter.content.fontSize * theme.counter.content.lineHeight,
  paddingHorizontal: getSpacingSmall(theme),
  textAlign: 'center',
  width: getSizeMediumX(theme)
}))
