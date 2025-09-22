/* eslint-disable max-len */
import { growthPlanColors } from '../growthPlanColors'
import { LevelButton } from './GrowthPlanProvider.types'

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
 * baseado no objeto growthPlanColors
 *
 * Esta função garante sincronização automática:
 * - Se novos níveis forem adicionados ao growthPlanColors, aparecerão automaticamente
 * - Se cores forem alteradas, os botões refletirão as mudanças
 * - Se níveis forem removidos, os botões também serão removidos
 */
export const generateLevelButtons = (): LevelButton[] => Object.keys(growthPlanColors).map((level) => ({
  key: level,
  label: formatLevelLabel(level),
  color: growthPlanColors[level as keyof typeof growthPlanColors].main
}))

/**
 * Obtém a lista de níveis disponíveis
 */
export const getAvailableLevels = (): string[] => Object.keys(growthPlanColors)

/**
 * Verifica se um nível é válido
 */
export const isValidLevel = (level: string): boolean => level in growthPlanColors

/**
 * Obtém o esquema de cores para um nível específico
 */
export const getColorSchemeForLevel = (level: string) => {
  if (!isValidLevel(level)) {
    console.warn(`Nível '${level}' não encontrado. Usando 'crystal' como fallback.`)
    return growthPlanColors.crystal
  }
  return growthPlanColors[level as keyof typeof growthPlanColors]
}
