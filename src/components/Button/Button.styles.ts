/* eslint-disable complexity */
import styled from 'styled-components/native'
import {
  getShadowBySize,
  getSizeMedium,
  getSizeSemi,
  getSizeSemiX,
  getSpacingMicro,
  getSpacingSmall,
  getSpacingTiny
} from '../../common/themeSelectors'
import { ButtonBaseProps } from './Button.types'

type SurfaceProps = Required<Pick<ButtonBaseProps, 'type' | 'theme' | 'disabled' | 'size'>>
type LabelProps = Pick<ButtonBaseProps, 'iconName' | 'iconPosition' | 'theme' | 'disabled' | 'type'>

export const getButtonStylesBySize = ({ size, theme }: Pick<SurfaceProps, 'size' | 'theme'>) => {
  const buttonSizes = {
    large: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: getSpacingSmall(theme)
    },
    medium: {
      minHeight: getSizeMedium(theme),
      paddingHorizontal: getSpacingSmall(theme)
    },
    semi: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: getSpacingMicro(theme)
    },
    semiX: {
      minHeight: getSizeSemiX(theme),
      paddingHorizontal: getSpacingTiny(theme)
    },
    small: {
      minHeight: getSizeSemi(theme),
      paddingHorizontal: getSpacingMicro(theme)
    }
  }

  return buttonSizes[size]
}

export const getButtonShadowByType = ({ disabled, theme, type }: Omit<SurfaceProps, 'size'>) => (
  type === 'contained' && !disabled
    ? getShadowBySize(theme, 'tiny')
    : {}
)

export const Surface = styled.View<SurfaceProps>(({
  disabled = false,
  size,
  theme,
  type = 'contained'
}) => ({
  ...getButtonStylesBySize({ size, theme }),
  alignContent: 'center',
  alignItems: 'center',
  background: disabled
    ? theme.button[type].color.disable.background
    : theme.button[type].color.enable.background,
  borderColor: disabled
    ? theme.button[type].color.disable.border
    : theme.button[type].color.enable.border,
  borderRadius: theme.button.borderRadius,
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
  type = 'contained',
  theme,
  disabled = false
}) => ({
  color: disabled ? theme.button[type].color.disable.label : theme.button[type].color.enable.label,
  fontFamily: theme.button.label.primary.fontFamily,
  fontSize: theme.button.label.fontSize,
  fontWeight: theme.button.label.primary.fontWeight,
  letterSpacing: theme.button.label.letterSpacing,
  lineHeight: 19,
  marginEnd: iconName && iconPosition === 'right' ? getSpacingTiny(theme) : 0,
  marginStart: iconName && iconPosition === 'left' ? getSpacingTiny(theme) : 0
}))
