import { ReactNode } from 'react'

export interface DialogHeaderProps {
  /**
   * The optional icon content
   * Can receive a single item or more within a fragment
   */
  icon?: ReactNode;
  /**
   * The optional header content
   * Used to receive a string inside a text component.
   */
  children?: ReactNode;
  /**
   * Optional ID for testing
   */
  testID?: string;
}
