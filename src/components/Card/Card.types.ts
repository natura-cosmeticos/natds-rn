import { ReactNode } from 'react'

export type CardTypes = 'base';

export interface CardProps {
  /**
   * The type of card to render.
   */
  type?: CardTypes;
  /**
   * The Card content
   */
  children: ReactNode;
  /**
   * Optional ID for testing
   */
  testID?: string;
  /**
   * Render a elevation shadow on the card
   * @default true
   */
  elevation?: boolean;
  /**
   * Determine rouded corners in the Card
   * @default true
   */
  radius?: boolean;
}
