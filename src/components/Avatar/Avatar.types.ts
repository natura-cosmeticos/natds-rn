/* eslint-disable max-len */
import { IconName } from '@naturacosmeticos/natds-icons';
import { Size } from '@naturacosmeticos/natds-themes/react-native';

/**
 * @deprecated
 */
type AvatarSizesDeprecated = keyof Pick<Size, 'tiny' | 'small' | 'large' | 'huge'>;
export type AvatarSizes = keyof Pick<Size, 'standard' | 'semi' | 'semiX' | 'medium' | 'largeXXX' | AvatarSizesDeprecated>;
/**
 * @deprecated
 */
type AvatarTypesDeprecated = 'anonymous';
export type AvatarTypes = 'image' | 'icon' | 'letter' | AvatarTypesDeprecated;

export interface AvatarBaseProps {
  /**
   * Divider variants `image`, `letter`, `icon`.
   * Deprecated 'anonymous' type, use `image` instead.
   */
  type?: AvatarTypes;
  /**
   * Optional size of the avatar.
   * Deprecated `tiny`, `small`, `large` and `huge` sizes.
   */
  size?: AvatarSizes;
  /**
   * Optional accessibilityLabel.
   */
  accessibilityLabel?: string;
  /**
   * Optional accessibilityHint.
   */
  accessibilityHint?: string;
  /**
   * Optional ID for testing.
   */
  testID?: string;
}

export type AvatarAnonymousProps = AvatarBaseProps & {
  type?: 'anonymous';
}

export type AvatarImageProps = AvatarBaseProps & {
  type?: 'image';
  /**
  * URL image.
  * @example imgSource={{uri: IMG_URL}}
  */
  imgSource?: any;
}

export type AvatarIconProps = AvatarBaseProps & {
  type?: 'icon';
  /**
  * Icon name
  */
  iconName?: IconName;
}

export type AvatarLetterProps = AvatarBaseProps & {
  type?: 'letter';
  /**
  * Label text
  */
  text?: string;
}

export type AvatarProps = AvatarImageProps | AvatarIconProps | AvatarLetterProps | AvatarAnonymousProps;
