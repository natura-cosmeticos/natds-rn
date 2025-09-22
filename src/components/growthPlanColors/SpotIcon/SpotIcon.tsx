/* eslint-disable max-len */
import React from 'react'
import { Icon } from '../../Icon/Icon'
import { SpotIconProps } from './SpotIcon.types'
import { useGrowthPlan } from '../Provider'

/**
 * SpotIcon - Componente de ícone especializado para Growth Plan
 *
 * Este componente utiliza o Context do GrowthPlanProviderColors para
 * obter as cores dinamicamente, permitindo que diferentes níveis
 * sejam aplicados sem recriar o componente.
 *
 * @param {SpotIconProps} props - Props do SpotIcon
 * @returns {JSX.Element} Componente SpotIcon renderizado
 *
 * @example
 * ```typescript
 * // Dentro de um Provider
 * <GrowthPlanProviderColors theme={growthPlanColors.diamondPlus}>
 *   <SpotIcon name="spoticon-growthplan-trophydiamond" color="main" size="large" />
 * </GrowthPlanProviderColors>
 *
 * // Sem Provider (usa crystal como fallback)
 * <SpotIcon name="spoticon-growthplan-crystal" color="mainLight" size="medium" />
 * ```
 */
export const SpotIcon = ({
  color = 'main',
  size = 'medium',
  ...iconProps
}: SpotIconProps) => {
  // Obtém as cores do contexto (com fallback para crystal se não estiver em um Provider)
  const { colors } = useGrowthPlan()

  // Obtém a cor hex baseada na cor semântica do contexto
  const colorValue = colors[color]

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
