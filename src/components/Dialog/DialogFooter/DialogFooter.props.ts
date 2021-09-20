import { ReactNode } from 'react';

export type AlignmentOptions = 'side-by-side' | 'stacked';

export interface DialogActionsProps {
  actionsAlignment?: AlignmentOptions
}

export interface DialogFooterProps {
  /**
   * The footer content
   */
  children: ReactNode
  /**
   * Optional ID for testing
   */
  testID?: string,
  /**
   * Optional alignment
   */
  actionsAlignment?: AlignmentOptions
}
