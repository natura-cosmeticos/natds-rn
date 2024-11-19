/* eslint-disable max-len */
import { Color, Size } from '@naturacosmeticos/natds-themes/react-native'
import { AccessibilityRole, AccessibilityState } from 'react-native'
import { IconName } from '@naturacosmeticos/natds-icons'
import { BrandTypes } from '../../common/brandTypes/brandTypes'

export type TagColors = keyof Pick<Color, 'primary' | 'secondary' | 'success' | 'alert' | 'warning' | 'link'>
export type TagSizes = keyof Pick<Size, 'small' | 'standard'>
export type TagIconPosition = 'left' | 'right'
// It was done that way for the documentation to show types explicitly.
export type TagPositions = keyof {
  default: 'default';
  left: 'left';
  right: 'right';
}

export interface TagProps {
  /**
   * Indicates that the view is an accessibility element.
   * @optional
   */
  accessible?: boolean;
  /**
   * When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view.
   * @optional
   */
  accessibilityLabel?: string;
  /**
   * An accessibility hint helps users understand what will happen when they
   * perform an action on the accessibility element when that result is not clear from the accessibility label.
   * @optional
   */
  accessibilityHint?: string;
  /**
   * Communicates the purpose of a component to the user of an assistive technology.
   * @optional
   */
  accessibilityRole?: AccessibilityRole;
  /**
   * Tells the screen reader to treat the currently focused on element as being in a specific state.
   * @example {selected: true, disabled: true}.
   * @optional
   */
  accessibilityState?: AccessibilityState;
  /** Specifies whether fonts should scale to respect Text Size accessibility settings.
   */
  allowFontScaling?: boolean;
  /** Specifies the largest possible scale a font can reach when allowFontScaling is enabled.
   * @default `undefined`
   */
  maxFontSizeMultiplier?: number;
  /** Define a label for the tag.
   * @required
   */
  text: string;
  /** Optional position of the tag.
   * @default `default`
   * @optional
   */
  borderPosition?: TagPositions;
  /** Optional size of the tag.
   * @default `small`
   * @optional
   */
  size?: TagSizes;
  /**
   * Optional color of the tag.
   * @default `primary`
   * @optional
   */
  color?: TagColors;
  /**
   * Optional brand of the tag.
   */
  brand?: BrandTypes;
  /**
   * Optional ID for testing.
   * @optional
   */
  testID?: string;
  /**
   * Optional prop IconName.
   * @optional
   */
  iconName?: IconName;
  /**
   * Optional prop IconPosition.
   * @optional
   */
  iconPosition?: TagIconPosition;
}
