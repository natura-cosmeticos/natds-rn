/* eslint-disable max-lines */
import { JSXElementConstructor } from 'react';
import {
  AccessibilityProps,
  Image,
  TextInputAndroidProps,
  TextInputIOSProps,
  TextInputProps,
} from 'react-native';
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import { IconButtonProps } from '../IconButton/IconButton.types';

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
export type InputSizes = keyof Pick<Size, 'medium' | 'mediumX'> | DeprecatedInputSizes
/**
 * @deprecated These are no longer necessary. This component now handles
 * its own state.
 */
type TextFieldStates = 'enabled' | 'focus' | 'active' | 'filled';

export type TextFieldTypes = 'text' | 'password' | 'number';

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
     * This prop should not be used as providing states is no longer necessary.
     * This component now handles its own state.
     */
    state?: TextFieldStates;
    /**
     * This provides the most common behavior expected for this component without
     * the need to customize it.
     */
    type?: TextFieldTypes;
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
  actionComponent: React.ReactComponentElement<JSXElementConstructor<Image>>;
}

interface ActionIconProps {
  action: 'icon';
  actionComponent: React.ReactComponentElement<JSXElementConstructor<IconButtonProps>>;
}

interface WithoutActionProps {
  action?: never;
  actionComponent?: never;
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
