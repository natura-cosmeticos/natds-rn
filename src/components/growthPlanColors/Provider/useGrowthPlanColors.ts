import { useContext } from 'react'
import { GrowthPlanColorContext } from './GrowthPlanProviderColors'
import { GrowthPlanColorContextType } from './GrowthPlanProviderColors.types'
import { growthPlanColors } from '../growthPlanColors'

/**
 * Hook personalizado para consumir as cores do Growth Plan
 *
 * Este hook permite acessar as cores do contexto do Growth Plan
 * com fallback para o nível 'crystal' caso não esteja dentro de um Provider
 *
 * @returns {GrowthPlanColorContextType} Objeto com cores e nível atual
 *
 * @example
 * ```typescript
 * const MyComponent = () => {
 *   const { colors, currentLevel } = useGrowthPlanColors()
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
export const useGrowthPlanColors = (): GrowthPlanColorContextType => {
  const context = useContext(GrowthPlanColorContext)

  // Se não estiver dentro de um Provider, usa crystal como fallback
  if (!context) {
    console.warn(
      'useGrowthPlanColors deve ser usado dentro de um GrowthPlanProviderColors. '
      + 'Usando nível "crystal" como fallback.'
    )

    return {
      colors: growthPlanColors.color.crystal,
      currentLevel: 'crystal'
    }
  }

  return context
}
