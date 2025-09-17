/**
 * Growth Plan Colors - Estrutura de cores do plano de crescimento
 *
 * Esta estrutura utiliza nomenclatura semântica (main, secondary, etc.)
 * facilitando o uso e reutilização.
 */

export interface SemanticColorScheme {
  main: string;
  onMain: string;
  mainLight: string;
  onMainLight: string;
  mainLightest: string;
  onMainLightest: string;
  mainDark: string;
  onMainDark: string;
  mainDarkest: string;
  onMainDarkest: string;
}

export interface GrowthPlanColorsType {
  crystal: SemanticColorScheme;
  bronze: SemanticColorScheme;
  silver: SemanticColorScheme;
  gold: SemanticColorScheme;
  sapphire: SemanticColorScheme;
  diamond: SemanticColorScheme;
  diamondPlus: SemanticColorScheme;
}

export interface GrowthPlanType {
  color: GrowthPlanColorsType;
}

export const growthPlanColors: GrowthPlanType = {
  color: {
    crystal: {
      main: '#75B7F0',
      onMain: '#111111',
      mainLight: '#BADBF7',
      onMainLight: '#111111',
      mainLightest: '#D1E7FA',
      onMainLightest: '#111111',
      mainDark: '#0F518A',
      onMainDark: '#FFFFFF',
      mainDarkest: '#093053',
      onMainDarkest: '#FFFFFF'
    },
    bronze: {
      main: '#DE713B',
      onMain: '#111111',
      mainLight: '#F7C6BA',
      onMainLight: '#111111',
      mainLightest: '#FBE1DA',
      onMainLightest: '#111111',
      mainDark: '#7B3715',
      onMainDark: '#FFFFFF',
      mainDarkest: '#441E0C',
      onMainDarkest: '#FFFFFF'
    },
    silver: {
      main: '#859DB7',
      onMain: '#111111',
      mainLight: '#BFCCD9',
      onMainLight: '#111111',
      mainLightest: '#E1E7ED',
      onMainLightest: '#111111',
      mainDark: '#35475A',
      onMainDark: '#FFFFFF',
      mainDarkest: '#1E2632',
      onMainDarkest: '#FFFFFF'
    },
    gold: {
      main: '#DA9E2F',
      onMain: '#111111',
      mainLight: '#EED3A0',
      onMainLight: '#111111',
      mainLightest: '#F8ECD6',
      onMainLightest: '#111111',
      mainDark: '#7A5716',
      onMainDark: '#FFFFFF',
      mainDarkest: '#44300C',
      onMainDarkest: '#FFFFFF'
    },
    sapphire: {
      main: '#317FE8',
      onMain: '#111111',
      mainLight: '#A3C6F5',
      onMainLight: '#111111',
      mainLightest: '#D1E3FA',
      onMainLightest: '#111111',
      mainDark: '#0F3F80',
      onMainDark: '#FFFFFF',
      mainDarkest: '#092449',
      onMainDarkest: '#FFFFFF'
    },
    diamond: {
      main: '#A26CE0',
      onMain: '#111111',
      mainLight: '#CAABED',
      onMainLight: '#111111',
      mainLightest: '#E6D7F7',
      onMainLightest: '#111111',
      mainDark: '#451977',
      onMainDark: '#FFFFFF',
      mainDarkest: '#260E42',
      onMainDarkest: '#FFFFFF'
    },
    diamondPlus: {
      main: '#3C4F77',
      onMain: '#FFFFFF',
      mainLight: '#BBC6DD',
      onMainLight: '#FFFFFF',
      mainLightest: '#DDE3EE',
      onMainLightest: '#FFFFFF',
      mainDark: '#293651',
      onMainDark: '#FFFFFF',
      mainDarkest: '#1B2436',
      onMainDarkest: '#FFFFFF'
    }
  }
}

/**
 * Exemplos de uso:
 *
 * // Uso semântico intuitivo
 * background: growthPlanColors.color.bronze.main
 * color: growthPlanColors.color.bronze.onMain
 *
 * // Para variações
 * background: growthPlanColors.color.gold.mainLight
 * color: growthPlanColors.color.gold.onMainLight
 *
 * // Para temas escuros
 * background: growthPlanColors.color.diamond.mainDark
 * color: growthPlanColors.color.diamond.onMainDark
 */
