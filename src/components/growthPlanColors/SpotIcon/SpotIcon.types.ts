import { IconProps } from '../../Icon/Icon.types'

// Range específico de tamanhos para SpotIcon (medium até hugeX)
export type SpotIconSizes = 'medium' | 'mediumX' | 'large' | 'largeX' | 'largeXX' | 'largeXXX' | 'huge' | 'hugeX'
export type SpotIconName = 'outlined-default-mockup' | 'spoticon-growthplan-crystal' | 'spoticon-growthplan-laurelwreath' | 'spoticon-growthplan-flowertulip' | 'spoticon-growthplan-graphic' | 'spoticon-growthplan-trophyaward' | 'spoticon-growthplan-diamondgem' | 'spoticon-growthplan-trophy' | 'spoticon-growthplan-trophysapphire' | 'spoticon-growthplan-trophydiamond'
// Interface que estende IconProps mantendo todas as funcionalidades do Icon
export interface SpotIconProps extends Omit<IconProps, 'size' | 'name'> {
  /**
   * SpotIcon size tokens (medium to hugeX range)
   * @default 'medium'
   */
  size?: SpotIconSizes;
  /**
   * SpotIcon name tokens
   * @default 'outlined-default-mockup'
   */
  name?: SpotIconName;

  /**
   * Custom color as hex value that overrides theme color tokens
   * When provided, this takes precedence over the 'color' prop
   */
  customColor?: string;
}
