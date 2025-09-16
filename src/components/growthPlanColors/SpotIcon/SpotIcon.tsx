import React from 'react'
import { Icon } from '../../Icon/Icon'
import { SpotIconProps } from './SpotIcon.types'
import { IconColors } from '../../Icon/Icon.types'

export const SpotIcon = ({
  customColor,
  color = 'highlight',
  size = 'medium',
  ...iconProps
}: SpotIconProps) => {
  // Se customColor for fornecida, usamos ela diretamente no style
  // Senão, usamos a cor do tema normalmente
  const iconColor: IconColors = customColor ? 'default' : color
  const customStyle = customColor ? { color: customColor } : undefined
  const finalStyle = customStyle ? [iconProps.style, customStyle] : iconProps.style

  return (
    <Icon
      {...iconProps}
      color={iconColor}
      size={size}
      style={finalStyle}
    />
  )
}
