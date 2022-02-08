export type ProgressIndicatorSizes = 'standard' | 'semi' | 'medium' | 'large';

export interface ProgressIndicatorProps {
  /**
   * Size to be used in the progress indicator
   */
  size?: ProgressIndicatorSizes;
  /**
   * Shows a colored layer behind the progress indicator
   */
  showLayer?: boolean;
}
