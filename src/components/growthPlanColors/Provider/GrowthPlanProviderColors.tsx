import React, { createContext, useMemo } from 'react'
import {
  GrowthPlanColorContextType,
  GrowthPlanProviderColorsProps
} from './GrowthPlanProviderColors.types'

/**
 * Context para as cores do Growth Plan
 */
export const GrowthPlanColorContext = createContext<GrowthPlanColorContextType | null>(null)

/**
 * Provider de cores para componentes do Growth Plan
 *
 * Este Provider permite que componentes filhos acessem as cores
 * do Growth Plan de forma dinâmica através do useGrowthPlanColors hook.
 *
 * @param {GrowthPlanProviderColorsProps} props - Props do Provider
 * @returns {JSX.Element} Provider com contexto de cores
 *
 * @example
 * ```typescript
 * import { GrowthPlanProviderColors } from '@naturacosmeticos/natds-rn'
 * import { growthPlanColors } from '@naturacosmeticos/natds-rn'
 *
 * // Usando com tema específico
 * <GrowthPlanProviderColors theme={growthPlanColors.color.diamondPlus}>
 *   <SpotIcon name="spoticon-growthplan-trophydiamond" color="primary" />
 * </GrowthPlanProviderColors>
 *
 * // Usando com nível identificado (opcional)
 * <GrowthPlanProviderColors
 *   theme={growthPlanColors.color.gold}
 *   level="gold"
 * >
 *   <MyGrowthPlanComponent />
 * </GrowthPlanProviderColors>
 * ```
 */
export const GrowthPlanProviderColors: React.FC<GrowthPlanProviderColorsProps> = ({
  theme,
  level,
  children
}) => {
  // Valor do contexto simplificado
  const contextValue = useMemo(() => ({
    colors: theme,
    currentLevel: level || 'unknown'
  }), [theme, level])

  return (
    <GrowthPlanColorContext.Provider value={contextValue}>
      {children}
    </GrowthPlanColorContext.Provider>
  )
}
