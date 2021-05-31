/* eslint-disable max-lines */
import {
  AccessibilityProps,
  ImageSourcePropType,
  TextInputAndroidProps,
  TextInputIOSProps,
  TextInputProps,
} from 'react-native';
import { IconName } from '@naturacosmeticos/natds-icons';
import { Color, Size } from '@naturacosmeticos/natds-themes/react-native';

type AndroidProps = Pick<TextInputAndroidProps,
  | 'autoCompleteType'
  | 'disableFullscreenUI'
  | 'importantForAutofill'
  | 'numberOfLines'
  | 'returnKeyLabel'
  | 'showSoftInputOnFocus'
  | 'textBreakStrategy'
>

type IOSProps = Pick<TextInputIOSProps,
  | 'clearButtonMode'
  | 'clearTextOnFocus'
  | 'dataDetectorTypes'
  | 'enablesReturnKeyAutomatically'
  | 'keyboardAppearance'
  | 'passwordRules'
  | 'rejectResponderTermination'
  | 'scrollEnabled'
  | 'selectionState'
  | 'spellCheck'
  | 'textContentType'
>

type MultiPlatformProps = Pick<TextInputProps,
  | 'allowFontScaling'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'autoFocus'
  | 'blurOnSubmit'
  | 'contextMenuHidden'
  | 'defaultValue'
  | 'inputAccessoryViewID'
  | 'keyboardType'
  | 'maxFontSizeMultiplier'
  | 'maxLength'
  | 'multiline'
  | 'onBlur'
  | 'onChange'
  | 'onChangeText'
  | 'onContentSizeChange'
  | 'onEndEditing'
  | 'onFocus'
  | 'onKeyPress'
  | 'onScroll'
  | 'onSelectionChange'
  | 'onSubmitEditing'
  | 'onTextInput'
  | 'placeholder'
  | 'returnKeyType'
  | 'secureTextEntry'
  | 'selectTextOnFocus'
  | 'selection'
  | 'testID'
  | 'value'
>

/**
 * @deprecated Use 'medium' and 'mediumX' instead
 */
type DeprecatedInputSizes = 'small' | 'regular';
type InputSizes = keyof Pick<Size, 'medium' | 'mediumX'> | DeprecatedInputSizes
/**
 * @deprecated These are no longer necessary. This component now handles
 * its own state.
 */
type TextFieldStates = 'enabled' | 'focus' | 'active' | 'filled';

interface BaseProps extends
  AccessibilityProps,
  MultiPlatformProps,
  AndroidProps,
  IOSProps {
    /**
     * Disabled TextField's are used when the user needs to perform
     * another action before being able to interact with the field.
     * When `true` the TextField is not editable and presents contents,
     * label, border and helper text in a less contrasting color.
     * @default false
     */
    disabled?: boolean;
    /**
     * When provided this shows above the field. It's used to identify
     * what the field is about.
     */
    label?: string;
    /**
     * Read only TextField's are used to show information the user can
     * not edit. When `true` the TextField is not editable and presents
     * a different background color.
     * @default false
     */
    readonly?: boolean;
    /**
     * When `true` the TextField's Label presents an asterisk after it.
     * Required TextField's are used when the user needs to fill it before moving
     * on to a next step.
     * @default false
     */
    required?: boolean;
    /**
     * This defines the height of the field, according to corresponding theme
     * Size token.
     * @default 'mediumX'
     */
    size?: InputSizes;
    /**
     * @deprecated
     * This prop should not be used as it is no longer necessary for the
     * field to identify its state. This component now handles its own state.
     */
    state?: TextFieldStates;
  }

interface FeedbackProps {
  /**
   * When provided this shows the user visual feedback using bright
   * characteristic colors and icons. It's used to indicate validation
   * status.
   */
  feedback: 'error' | 'success';
  /**
   * When provided this shows below the field. It's used to provide
   * further information about how to fill in the field.
   */
  helperText: string;
}

interface WithoutFeedbackProps {
  feedback?: never;
  helperText?: string;
}

interface ActionImageProps {
  action: 'image';
  actionOnPress: () => void;
  iconColor?: never;
  iconName?: never;
  imageSource: ImageSourcePropType;
}

interface ActionIconProps {
  action: 'icon';
  actionOnPress: () => void;
  /**
   * Set the color of the icon.
   * @default highEmphasis
   */
  iconColor?: keyof Pick<Color, 'primary' | 'highEmphasis'>;
  /**
   * Set the icon to be rendered.
   * Check all available names in [Icon Library](https://natds.natura.design/icon-library)
   */
  iconName: IconName;
  imageSource?: never;
}

interface WithoutActionProps {
  action?: never;
  actionOnPress?: never;
  iconColor?: never;
  iconName?: never;
  imageSource?: never;
}

export type TextFieldProps = BaseProps
  & (
    | WithoutActionProps
    | ActionImageProps
    | ActionIconProps
  )
  & (
    | WithoutFeedbackProps
    | FeedbackProps
  )
