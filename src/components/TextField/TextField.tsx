/* eslint-disable max-lines */
import React from 'react';
import {
  Image,
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  View,
} from 'react-native';
import { useTheme } from 'styled-components/native';
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
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { InputFeedbackContainer } from '../InputFeedbackContainer';
import { IconButton } from '../IconButton';
import { TouchableRipple } from '../TouchableRipple';
import { TextFieldProps } from './TextField.types';

/* eslint-disable complexity */
export const TextField = (props: TextFieldProps) => {
  const theme = useTheme();
  const inheritedProps = {
    allowFontScaling: props.allowFontScaling,
    autoCapitalize: props.autoCapitalize,
    autoCompleteType: props.autoCompleteType,
    autoCorrect: props.autoCorrect,
    autoFocus: props.autoFocus,
    blurOnSubmit: props.blurOnSubmit,
    clearButtonMode: props.clearButtonMode,
    clearTextOnFocus: props.clearTextOnFocus,
    contextMenuHidden: props.contextMenuHidden,
    dataDetectorTypes: props.dataDetectorTypes,
    defaultValue: props.defaultValue,
    disableFullscreenUI: props.disableFullscreenUI,
    enablesReturnKeyAutomatically: props.enablesReturnKeyAutomatically,
    importantForAutofill: props.importantForAutofill,
    inputAccessoryViewID: props.inputAccessoryViewID,
    keyboardAppearance: props.keyboardAppearance,
    keyboardType: props.keyboardType,
    maxFontSizeMultiplier: props.maxFontSizeMultiplier,
    maxLength: props.maxLength,
    multiline: props.multiline,
    numberOfLines: props.numberOfLines,
    onChange: props.onChange,
    onChangeText: props.onChangeText,
    onContentSizeChange: props.onContentSizeChange,
    onEndEditing: props.onEndEditing,
    onKeyPress: props.onKeyPress,
    onScroll: props.onScroll,
    onSelectionChange: props.onSelectionChange,
    onSubmitEditing: props.onSubmitEditing,
    onTextInput: props.onTextInput,
    passwordRules: props.passwordRules,
    placeholder: props.placeholder,
    rejectResponderTermination: props.rejectResponderTermination,
    returnKeyLabel: props.returnKeyLabel,
    returnKeyType: props.returnKeyType,
    scrollEnabled: props.scrollEnabled,
    secureTextEntry: props.secureTextEntry,
    selection: props.selection,
    selectionState: props.selectionState,
    selectTextOnFocus: props.selectTextOnFocus,
    showSoftInputOnFocus: props.showSoftInputOnFocus,
    spellCheck: props.spellCheck,
    textBreakStrategy: props.textBreakStrategy,
    textContentType: props.textContentType,
  };
  const {
    action,
    actionOnPress,
    disabled = false,
    feedback,
    helperText = '',
    iconColor,
    iconName,
    imageSource,
    label,
    onBlur = () => {},
    onFocus = () => {},
    readonly,
    required = false,
    size = 'mediumX',
    value = '',
  }: TextFieldProps = props;
  const [active, setActive] = React.useState(false);
  const filled = !readonly && value !== '';
  const statusActiveHandler = (
    event: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    nativeEvent: NativeSyntheticEvent<TextInputFocusEventData>,
    status: boolean,
  ) => {
    setActive(status);
    if (event) event(nativeEvent);
  };
  const fieldHeight = size === 'mediumX' ? getSizeMediumX(theme) : getSizeMedium(theme);
  const getContainerProps = () => {
    if (disabled) return { disabled, helperText };
    if (feedback) return { active, feedback, helperText };

    return { active };
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
          paddingHorizontal: getSpacingSmall(theme),
        }}
        editable={!disabled && !readonly}
        onBlur={nativeEvent => statusActiveHandler(onBlur, nativeEvent, false)}
        onFocus={nativeEvent => !readonly && statusActiveHandler(onFocus, nativeEvent, true)}
        placeholderTextColor={disabled ? getColorLowEmphasis(theme) : getColorMediumEmphasis(theme)}
        value={value}
        { ...inheritedProps }
      />
      { action === 'icon' && actionOnPress
        && <View style={{ paddingRight: getSpacingTiny(theme) }}>
            <IconButton testID='action-icon' iconColor={iconColor} icon={iconName} onPress={actionOnPress} />
          </View>
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
              width: getSizeLarge(theme),
            }}
            source={imageSource}
          />
        </TouchableRipple>
      }
    </InputFeedbackContainer>
  );
};
