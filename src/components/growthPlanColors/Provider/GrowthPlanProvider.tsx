import React, { createContext, useMemo } from 'react'
import {
  GrowthPlanContextType,
  GrowthPlanProviderProps
} from './GrowthPlanProvider.types'
import { getColorSchemeForLevel } from './levelSelectorUtils'

/**
 * Context para o Growth Plan
 */
export const GrowthPlanContext = createContext<GrowthPlanContextType | null>(null)

/**
 * Provider para componentes do Growth Plan
 *
 * Este Provider permite que componentes filhos acessem as cores
 * do Growth Plan de forma dinâmica através do useGrowthPlan hook.
 * Resolve automaticamente o tema baseado no nível fornecido.
 *
 * @param {GrowthPlanProviderProps} props - Props do Provider
 * @returns {JSX.Element} Provider com contexto do Growth Plan
 *
 * @example
 * ```typescript
 * import { GrowthPlanProvider } from '@naturacosmeticos/natds-rn'
 *
 * // API simplificada - apenas especifique o nível
 * <GrowthPlanProvider level="bronze">
 *   <SpotIcon name="spoticon-growthplan-trophydiamond" color="main" />
 * </GrowthPlanProvider>
 *
 * // Outros exemplos de níveis
 * <GrowthPlanProvider level="diamondPlus">
 *   <MyGrowthPlanComponent />
 * </GrowthPlanProvider>
 * ```
 */
export const GrowthPlanProvider: React.FC<GrowthPlanProviderProps> = ({
  level,
  children
}) => {
  // Resolve o tema automaticamente baseado no nível
  const theme = getColorSchemeForLevel(level)

  // Valor do contexto simplificado
  const contextValue = useMemo(() => ({
    colors: theme,
    currentLevel: level
  }), [theme, level])

  return (
    <GrowthPlanContext.Provider value={contextValue}>
      {children}
    </GrowthPlanContext.Provider>
  )
}
