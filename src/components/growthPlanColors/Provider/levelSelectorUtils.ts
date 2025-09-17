/* eslint-disable max-len */
import { growthPlanColors } from '../growthPlanColors'
import { LevelButton } from './GrowthPlanProviderColors.types'

/**
 * Formata o nome do nível para exibição
 * Exemplos:
 * - crystal -> Crystal
 * - diamondPlus -> Diamond Plus
 * - sapphire -> Sapphire
 */
export const formatLevelLabel = (level: string): string => level
  .replace(/([A-Z])/g, ' $1') // adiciona espaço antes de maiúsculas
  .replace(/^./, (str) => str.toUpperCase()) // primeira letra maiúscula
  .trim()

/**
 * Gera automaticamente os botões de seleção de nível
 * baseado no objeto growthPlanColors.color
 *
 * Esta função garante sincronização automática:
 * - Se novos níveis forem adicionados ao growthPlanColors, aparecerão automaticamente
 * - Se cores forem alteradas, os botões refletirão as mudanças
 * - Se níveis forem removidos, os botões também serão removidos
 */
export const generateLevelButtons = (): LevelButton[] => Object.keys(growthPlanColors.color).map((level) => ({
  key: level,
  label: formatLevelLabel(level),
  color: growthPlanColors.color[level as keyof typeof growthPlanColors.color].primary
}))

/**
 * Obtém a lista de níveis disponíveis
 */
export const getAvailableLevels = (): string[] => Object.keys(growthPlanColors.color)

/**
 * Verifica se um nível é válido
 */
export const isValidLevel = (level: string): boolean => level in growthPlanColors.color

/**
 * Obtém o esquema de cores para um nível específico
 */
export const getColorSchemeForLevel = (level: string) => {
  if (!isValidLevel(level)) {
    console.warn(`Nível '${level}' não encontrado. Usando 'crystal' como fallback.`)
    return growthPlanColors.color.crystal
  }
  return growthPlanColors.color[level as keyof typeof growthPlanColors.color]
}
