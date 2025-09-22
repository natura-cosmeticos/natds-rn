import { useContext } from 'react'
import { GrowthPlanContext } from './GrowthPlanProvider'
import { GrowthPlanContextType } from './GrowthPlanProvider.types'
import { growthPlanColors } from '../growthPlanColors'

/**
 * Hook personalizado para consumir o contexto do Growth Plan
 *
 * Este hook permite acessar as cores do contexto do Growth Plan
 * com fallback para o nível 'crystal' caso não esteja dentro de um Provider
 *
 * @returns {GrowthPlanContextType} Objeto com cores e nível atual
 *
 * @example
 * ```typescript
 * const MyComponent = () => {
 *   const { colors, currentLevel } = useGrowthPlan()
 *
 *   return (
 *     <View style={{ backgroundColor: colors.main }}>
 *       <Text style={{ color: colors.onMain }}>
 *         Nível atual: {currentLevel}
 *       </Text>
 *     </View>
 *   )
 * }
 * ```
 */
export const useGrowthPlan = (): GrowthPlanContextType => {
  const context = useContext(GrowthPlanContext)

  // Se não estiver dentro de um Provider, usa crystal como fallback
  if (!context) {
    console.warn(
      'useGrowthPlan deve ser usado dentro de um GrowthPlanProvider. '
      + 'Usando nível "crystal" como fallback.'
    )

    return {
      colors: growthPlanColors.color.crystal,
      currentLevel: 'crystal'
    }
  }

  return context
}
