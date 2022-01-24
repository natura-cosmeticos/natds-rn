import { ReactNode } from 'react'

import { Theme } from '../../common/themeSelectors'

export type CardTypes = 'base';

export interface CardProps {
  /**
   * Card variants `base`
   */
  type?: CardTypes;
  /**
   * The Card content
   */
  children: ReactNode;
  /**
   * The Card theme
   */
  theme: Theme;
  /**
   * Optional ID for testing
   */
  testID?: string;
}
