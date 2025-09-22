import { ReactNode } from 'react'
import { GrowthPlanColor, GrowthPlanLevel } from '../growthPlanColors'

/**
 * Interface para o contexto do Growth Plan
 */
export interface GrowthPlanContextType {
  /**
   * Esquema de cores semânticas atual
   */
  colors: GrowthPlanColor;
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
