import { ReactNode } from 'react'
import { SemanticColorScheme } from '../growthPlanColors'

/**
 * Interface para o contexto do Growth Plan Colors
 */
export interface GrowthPlanColorContextType {
  /**
   * Esquema de cores semânticas atual
   */
  colors: SemanticColorScheme;
  /**
   * Nível atual selecionado (crystal, bronze, silver, etc.)
   */
  currentLevel: string;
}

/**
 * Props para o GrowthPlanProviderColors
 */
export interface GrowthPlanProviderColorsProps {
  /**
   * Tema de cores a ser aplicado (um dos níveis do growthPlanColors)
   */
  theme: SemanticColorScheme;
  /**
   * Nome do nível atual (opcional, usado para identificação)
   */
  level?: string;
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
   * Cor primary do nível
   */
  color: string;
}
