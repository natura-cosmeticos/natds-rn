import { Color } from '@naturacosmeticos/natds-themes'
import { IconName } from '@naturacosmeticos/natds-icons'

export type Variants = 'standard' | 'outlined' | 'filled';
export type Types = 'success' | 'error' | 'warning' | 'info' | 'custom';

export type AlertBaseProps = {
  /**
   * Parameter that will determine alert style such as border rendering and background color.
   * @default 'standard'
   */
  variant?: Variants;
  /**
   * Color types will define the template with colors and iconography.
   * @default info
   */
  type?: Types;
  /**
   * Parameter defines whether the icon will be rendered.
   * @default true
   */
  icon?: boolean;
  /**
   * Alert title will define the title that will be rendered at the top of the alert.
   */
  title?: string;
  /**
   * Alert message will define the content that will be rendered at the bottom of the alert.
   */
  message: string;
  /**
   * Optional ID for testing.
   */
  testID?: string;
}

export type AlertCustomProps = AlertBaseProps & {
  /**
   * Color types will define the template with colors and iconography.
   */
  type: 'custom';
  /**
   * Parameter that defines the background color of the Alert.
   * @default link
   */
  backgroundColorName: keyof Color;
  /**
   * Parameter that defines the border color of the Alert. That parameter.
   * This parameter will only be defined with the variant outlined.
   * @default link
   */
  borderColorName?: keyof Color;
  /**
   * Parameter that defines the icon color of the Alert.
   * @default neutral900
   */
  iconColorName?: keyof Color;
  /**
   * Parameter that defines the name of the icon.
   * @default outlined-default-mockup
   */
  iconName: IconName;
  /**
   * Parameter that defines the title color.
   * @default neutral900
   */
  titleColorName: keyof Color;
  /**
   * Parameter that defines the message content color.
   * @default neutral900
   */
  messageColorName: keyof Color;
}

export type AlertProps = AlertBaseProps | AlertCustomProps;
