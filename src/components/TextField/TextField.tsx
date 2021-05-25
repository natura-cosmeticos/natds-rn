/* eslint-disable max-lines */
import React from 'react';
import {
  AccessibilityProps,
  Image,
  ImageSourcePropType,
  TextInput,
  TextInputAndroidProps,
  TextInputIOSProps,
  TextInputProps,
  View,
} from 'react-native';
import { useTheme } from 'styled-components/native';
import { IconName } from '@naturacosmeticos/natds-icons';
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import {
  buildColorWithOpacity,
  getBorderRadiusMedium,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getOpacityDisabledLow,
  getSizeLarge,
  getSizeMedium,
  getSizeMediumX,
  getSizeSemi,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { InputFeedbackContainer } from '../InputFeedbackContainer';
import { IconButton } from '../IconButton';
import { TouchableRipple } from '../TouchableRipple';

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

interface BaseProps extends
  AccessibilityProps,
  MultiPlatformProps,
  AndroidProps,
  IOSProps {
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
    // feedback?: 'error' | 'success';
    /**
     * When provided this shows below the field. It's used to provide
     * further information about how to fill in the field.
     */
    // helperText?: string;
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

interface FeedbackProps {
  feedback: 'error' | 'success';
  helperText: string;
}

interface WithoutFeedbackProps {
  feedback?: never;
  helperText?: string;
}

interface ActionImageProps {
  action: 'image';
  actionOnPress: () => void;
  iconName?: never;
  imageSource: ImageSourcePropType;
}

interface ActionIconProps {
  action: 'icon';
  actionOnPress: () => void;
  iconName: IconName;
  imageSource?: never;
}

interface WithoutActionProps {
  action?: never;
  actionOnPress?: never;
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

/* eslint-disable complexity, max-statements */
export const TextField = (props: TextFieldProps) => {
  const theme = useTheme();
  const {
    action,
    actionOnPress,
    allowFontScaling,
    autoCapitalize,
    autoCompleteType,
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    clearButtonMode,
    clearTextOnFocus,
    contextMenuHidden,
    dataDetectorTypes,
    defaultValue,
    disableFullscreenUI,
    disabled = false,
    enablesReturnKeyAutomatically,
    feedback,
    helperText = '',
    iconName,
    imageSource,
    importantForAutofill,
    inputAccessoryViewID,
    keyboardAppearance,
    keyboardType,
    label,
    maxFontSizeMultiplier,
    maxLength,
    multiline,
    numberOfLines,
    onBlur,
    onChange,
    onChangeText,
    onContentSizeChange,
    onEndEditing,
    onFocus,
    onKeyPress,
    onScroll,
    onSelectionChange,
    onSubmitEditing,
    onTextInput,
    passwordRules,
    placeholder,
    readonly,
    rejectResponderTermination,
    required = false,
    returnKeyLabel,
    returnKeyType,
    scrollEnabled,
    secureTextEntry,
    selectTextOnFocus,
    selection,
    selectionState,
    showSoftInputOnFocus,
    size = 'mediumX',
    spellCheck,
    textBreakStrategy,
    textContentType,
    value = '',
  }: TextFieldProps = props;
  const [active, setActive] = React.useState(false);
  const filled = !readonly && value !== '';
  const iconWidthWithPadding = getSpacingTiny(theme) + getSizeSemi(theme);
  const imageWidth = getSizeLarge(theme);
  const focusHandler = (nativeEvent) => {
    setActive(true);
    if (onFocus) onFocus(nativeEvent);
  };
  const blurHandler = (nativeEvent) => {
    setActive(false);
    if (onBlur) onBlur(nativeEvent);
  };
  const fieldHeight = size === 'mediumX' ? getSizeMediumX(theme) : getSizeMedium(theme);
  const getContainerProps = () => {
    if (disabled) {
      return {
        disabled, helperText,
      };
    }

    if (feedback) {
      return {
        active, feedback, helperText,
      };
    }

    return {
      active,
    };
  };

  return (
    <InputFeedbackContainer
      filled={filled}
      helperText={helperText}
      label={label}
      required={required}
      {...getContainerProps()}
    >
      <TextInput testID="input"
        style={{
          backgroundColor: readonly
            ? buildColorWithOpacity(getColorLowEmphasis, getOpacityDisabledLow, theme)
            : getColorSurface(theme),
          borderRadius: getBorderRadiusMedium(theme),
          color: disabled ? getColorLowEmphasis(theme) : getColorHighEmphasis(theme),
          flexGrow: 1,
          height: fieldHeight,
          overflow: 'hidden',
          paddingLeft: getSpacingSmall(theme),
          paddingRight: action
            ? getSpacingTiny(theme) + iconWidthWithPadding
            : getSpacingSmall(theme),
          width: '100%',
        }}
        allowFontScaling={allowFontScaling}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        blurOnSubmit={blurOnSubmit}
        clearButtonMode={clearButtonMode}
        clearTextOnFocus={clearTextOnFocus}
        contextMenuHidden={contextMenuHidden}
        dataDetectorTypes={dataDetectorTypes}
        defaultValue={defaultValue}
        disableFullscreenUI={disableFullscreenUI}
        editable={!disabled && !readonly}
        enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
        importantForAutofill={importantForAutofill}
        inputAccessoryViewID={inputAccessoryViewID}
        keyboardAppearance={keyboardAppearance}
        keyboardType={keyboardType}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        onBlur={nativeEvent => blurHandler(nativeEvent)}
        onChange={onChange}
        onChangeText={onChangeText}
        onContentSizeChange={onContentSizeChange}
        onEndEditing={onEndEditing}
        onFocus={nativeEvent => focusHandler(nativeEvent)}
        onKeyPress={onKeyPress}
        onScroll={onScroll}
        onSelectionChange={onSelectionChange}
        onSubmitEditing={onSubmitEditing}
        onTextInput={onTextInput}
        passwordRules={passwordRules}
        placeholder={placeholder}
        placeholderTextColor={disabled ? getColorLowEmphasis(theme) : getColorMediumEmphasis(theme)}
        rejectResponderTermination={rejectResponderTermination}
        returnKeyLabel={returnKeyLabel}
        returnKeyType={returnKeyType}
        scrollEnabled={scrollEnabled}
        secureTextEntry={secureTextEntry}
        selectTextOnFocus={selectTextOnFocus}
        selection={selection}
        selectionState={selectionState}
        showSoftInputOnFocus={showSoftInputOnFocus}
        spellCheck={spellCheck}
        textBreakStrategy={textBreakStrategy}
        textContentType={textContentType}
        value={value}
      />
      { action
        && <View style={{
          right: action === 'icon' ? iconWidthWithPadding : imageWidth,
        }}>
          { action === 'icon' && actionOnPress
            && <IconButton testID='action-icon' icon={iconName} onPress={actionOnPress} />
          }
          { action === 'image' && imageSource
            && <TouchableRipple
              color="highlight"
              size={fieldHeight / 2 + 5}
              onPress={actionOnPress}
            >
              <Image
                testID='action-image'
                style={{
                  borderBottomRightRadius: getBorderRadiusMedium(theme),
                  borderTopRightRadius: getBorderRadiusMedium(theme),
                  height: fieldHeight,
                  width: imageWidth,
                }}
                source={imageSource}
              />
            </TouchableRipple>
          }
        </View>
      }
    </InputFeedbackContainer>
  );
};
/* eslint-enabled complexity */
