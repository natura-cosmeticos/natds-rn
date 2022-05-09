import {
  ImageProps as ImageNativeProps, ImagePropsAndroid, ImagePropsIOS, ImageSourcePropType
} from 'react-native'

type IOSPlatformProps = Pick<ImagePropsIOS,
  | 'capInsets'
  | 'onPartialLoad'
>

type AndroidPlatformProps = Pick<ImagePropsAndroid,
  | 'fadeDuration'
>

type MultiPlatformProps = Pick<ImageNativeProps,
  | 'accessible'
  | 'accessibilityLabel'
  | 'blurRadius'
  | 'defaultSource'
  | 'loadingIndicatorSource'
  | 'onError'
  | 'onLayout'
  | 'onLoad'
  | 'onLoadEnd'
  | 'onLoadStart'
  | 'onProgress'
  | 'resizeMode'
  | 'style'
>

export interface ImageBaseProps {
  /**
   * Optional ID for testing.
   */
  testID?: string;

  /**
   * Optional attribute will bring the component arranged differently for each type.
   * @default 'standard'
   */
  variant?: 'standard' | 'highlight';

  /**
   * Optional property defines the radius of the element's corners.
   * @default 'none'
   */
  radius?: 'none' | 'medium' | 'circle';

  /**
   * Optional attribute to define the side of the fade effect.
   * @default 'bottom'
   */
  fade?: 'top' | 'left' | 'right' | 'bottom';

  /**
   * Can receive any component as a child to be used as content
   */
  children?: React.ReactNode;

  /**
   * The image source either a remote URL or a local file resource.
   */
  source: string | ImageSourcePropType;
}

export type ImageProps = ImageBaseProps
  & (MultiPlatformProps | IOSPlatformProps | AndroidPlatformProps);
