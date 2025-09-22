import { IconProps } from '../../Icon/Icon.types'
import { GrowthPlanColor } from '../growthPlanColors'

// Range específico de tamanhos para SpotIcon (medium até hugeX)
export type SpotIconSizes = 'medium' | 'mediumX' | 'large' | 'largeX' | 'largeXX' | 'largeXXX' | 'huge' | 'hugeX'

// Cores semânticas para SpotIcon baseadas no GrowthPlanColor
export type SpotIconColors = keyof GrowthPlanColor
export type SpotIconName = 'outlined-default-mockup' | 'spoticon-growthplan-crystal' | 'spoticon-growthplan-laurelwreath' | 'spoticon-growthplan-flowertulip' | 'spoticon-growthplan-graphic' | 'spoticon-growthplan-trophyaward' | 'spoticon-growthplan-diamondgem' | 'spoticon-growthplan-trophy' | 'spoticon-growthplan-trophysapphire' | 'spoticon-growthplan-trophydiamond'
// Interface que estende IconProps mantendo todas as funcionalidades do Icon
export interface SpotIconProps extends Omit<IconProps, 'size' | 'name' | 'color'> {
  /**
   * SpotIcon size tokens (medium to hugeX range)
   * @default 'medium'
   */
  size?: SpotIconSizes;
  /**
   */
  name?: SpotIconName;

  /**
   * Semantic color tokens from Growth Plan color scheme
   * @default 'main'
   */
  color?: SpotIconColors;
}
