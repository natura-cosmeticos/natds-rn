import { ReactNode } from 'react'
import { SemanticColorScheme } from '../growthPlanColors'

/**
 * Níveis disponíveis do Growth Plan
 */
export type GrowthPlanLevel = 'crystal' | 'bronze' | 'silver' | 'gold' | 'sapphire' | 'diamond' | 'diamondPlus'

/**
 * Interface para o contexto do Growth Plan
 */
export interface GrowthPlanContextType {
  /**
   * Esquema de cores semânticas atual
   */
  colors: SemanticColorScheme;
  /**
   * Nível atual selecionado (crystal, bronze, silver, etc.)
   */
  currentLevel: GrowthPlanLevel;
}

/**
 * Props para o GrowthPlanProvider
 */
export interface GrowthPlanProviderProps {
  /**
   * Nível do Growth Plan que define o tema de cores
   */
  level: GrowthPlanLevel;
  /**
   * Componentes filhos que receberão as cores via contexto
   */
  children: ReactNode;
}

/**
 * Interface para botões de seleção de nível
 */
export interface LevelButton {
  /**
   * Chave identificadora do nível (crystal, bronze, etc.)
   */
  key: string;
  /**
   * Label formatado para exibição (Crystal, Bronze, etc.)
   */
  label: string;
  /**
   * Cor main do nível
   */
  color: string;
}
