/* eslint-disable max-len */
import React from 'react'
import { Icon } from '../../Icon/Icon'
import { SpotIconProps, SpotIconColors } from './SpotIcon.types'
import { growthPlanColors } from '../growthPlanColors'

/**
 * Função utilitária para mapear cores semânticas para valores hex
 * Por enquanto usa o nível 'crystal' como padrão
 * Posteriormente será sobrescrito pelo Provider
 */
const getSemanticColor = (colorType: SpotIconColors): string => growthPlanColors.color.crystal[colorType]

export const SpotIcon = ({
  color = 'primary',
  size = 'medium',
  ...iconProps
}: SpotIconProps) => {
  // Obtém a cor hex baseada na cor semântica
  const colorValue = getSemanticColor(color)

  // Usa 'default' no Icon e aplica a cor via style
  const customStyle = { color: colorValue }
  const finalStyle = [iconProps.style, customStyle]

  return (
    <Icon
      {...iconProps}
      color="default"
      size={size}
      style={finalStyle}
    />
  )
}
