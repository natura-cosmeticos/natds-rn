/* eslint-disable max-len */
import { AccessibilityRole } from 'react-native'
import { Theme } from '../../common/themeSelectors'

export type TabButtonTypes = 'primary' | 'secondary'
export type IconPositions = 'leading' | 'top' | 'icon'
export type TabPositions = 'fixed' | 'scrollable'
export interface TabOptions {
  disabled?: boolean;
  iconName?: string;
  key: string;
  label: string;
  selected?: boolean;
}

export interface TabProps {
  /**
   * Communicates the purpose of a component to the user of an assistive technology.
   * @default 'tab'
   */
   accessibilityRole?: AccessibilityRole;
  /**
   * When `true`, indicates that the view is an accessibility element.
   * @default false
   */
  accessible?: boolean;
  /**
   * Provide a background color to the tab.
   * @default true
   */
  backgroundColor?: boolean;
  /**
   * Elevation of the tab, applies a shadow to the tab.
   * @default false
   */
  elevation?: boolean;
  /**
   * Icon position relative to text label `leading` | `top` | `icon`.
   * @default 'none'
   */
  iconPosition?: IconPositions;
  /**
   * Tab position relative to screen `fixed` | `scrollable`.
   * @default 'fixed'
   */
  position?: TabPositions;
  /**
   * Array of Tab options with `key`, `label`, `selected`, `disabled`, and `iconName` properties.
   */
  tabOptions: TabOptions[];
  /**
   * The onChange prop allows passing a function that will be called
   * once the tab option has been pressed.
   */
  onChange: (value: number) => void;
  /**
   * The tab theme
   */
  theme: Theme;
  /**
   * Optional ID for testing
   */
  testID?: string;
}
