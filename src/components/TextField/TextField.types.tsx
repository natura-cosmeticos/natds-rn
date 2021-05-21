import { IconName } from '@naturacosmeticos/natds-icons';
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import {
  AccessibilityProps,
  TextInputAndroidProps,
  TextInputIOSProps,
  TextInputProps,
} from 'react-native';

type AndroidProps = Pick<TextInputAndroidProps,
  | 'autoCompleteType'
  | 'disableFullscreenUI'
  | 'importantForAutofill'
  // | 'inlineImageLeft'
  // | 'inlineImagePadding'
  | 'numberOfLines'
  | 'returnKeyLabel'
  | 'showSoftInputOnFocus'
  // | 'textAlignVertical'
  | 'textBreakStrategy'
  // | 'underlineColorAndroid'
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
  // | 'caretHidden'
  | 'contextMenuHidden'
  | 'defaultValue'
  // | 'editable'
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
  // | 'placeholderTextColor'
  | 'returnKeyType'
  | 'secureTextEntry'
  | 'selectTextOnFocus'
  | 'selection'
  // | 'selectionColor'
  // | 'style'
  | 'testID'
  | 'value'
>

type InputSizes = keyof Pick<Size, 'medium' | 'mediumX'>

export interface TextFieldProps extends
  AccessibilityProps,
  MultiPlatformProps,
  AndroidProps,
  IOSProps {
    action?: 'icon' | 'image';
    iconName?: IconName;
    /**
     * Disabled TextField's are used when the user needs to perform
     * another action before being able to interact with the field.
     * When `true` the TextField is not editable and presents label,
     * border and helper text in a different color
     * @default false
     */
    disabled?: boolean;
    /**
     * When provided this shows the user visual feedback using bright
     * characteristic colors and icons. It's used to indicate validation
     * status.
     */
    feedback?: 'error' | 'success';
    /**
     * When provided this shows below the field. It's used to provide
     * further information about how to fill in the field.
     */
    helperText?: string;
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
     * Required TextField's need to be filled for the user to move on to
     * the next step. When `true` the TextField is not editable and presents
     * an asterisk after the label.
     * @default false
     */
    required?: boolean;
    /**
     * This defines the height of the field.
     * @default 'mediumX'
     */
    size?: InputSizes;
  }
