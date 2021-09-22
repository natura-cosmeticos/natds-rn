import { ReactNode } from 'react';

export interface DialogHeaderProps {
  /**
   * The optional icon content
   */
  icon?: ReactNode
  /**
   * The optional header content
   */
  children?: ReactNode
  /**
   * Optional ID for testing
   */
  testID?: string,
}
