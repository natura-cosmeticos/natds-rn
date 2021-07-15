import { Color, Size } from '@naturacosmeticos/natds-themes';

export type LogoColors = 'neutral' | keyof Pick<Color, 'primary' | 'secondary' | 'highlight' | 'surface'>
export type LogoSizes = keyof Pick<Size, 'medium' | 'mediumX' | 'large' | 'largeX' | 'largeXX' | 'largeXXX' | 'huge' | 'hugeX' | 'hugeXX' | 'hugeXXX' | 'veryHuge'>
export type LogoModels = 'a' | 'b'


export interface LogoProps {
  /**
   * This selects the color in which the logo will be displayed, `neutral` being
   * its official color.
   * @default neutral
  */
  color?: LogoColors;
  /**
   * Determines which logo model to show for brands that have two models to pick from.
   * @default a
   */
  model?: LogoModels;
  /**
   * Sets the size of the logo
   * @default veryhuge
   */
  size?: LogoSizes
}
