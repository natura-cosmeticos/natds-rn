/* eslint-disable max-lines */
import React from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  buildColorWithOpacity,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getOpacityDisabledLow,
  getSizeMedium,
  getSizeMediumX,
} from '../../common/themeSelectors';
import { ActionIcon, ActionImage, Input } from './TextField.styles';
import { InputFeedbackContainer } from '../InputFeedbackContainer';
import { TextFieldProps } from './TextField.types';
import { TouchableRipple } from '../TouchableRipple';
import { IconButton } from '../IconButton';

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
  const readonlyColor = buildColorWithOpacity(getColorLowEmphasis, getOpacityDisabledLow, theme);
  const fieldHeight = size === 'mediumX' ? getSizeMediumX(theme) : getSizeMedium(theme);

  const statusActiveHandler = (
    event: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
    nativeEvent: NativeSyntheticEvent<TextInputFocusEventData>,
    status: boolean,
  ) => {
    setActive(status);
    if (event) event(nativeEvent);
  };
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
      <Input testID="input"
        backgroundColor={readonly ? readonlyColor : getColorSurface(theme)}
        color={disabled ? getColorLowEmphasis(theme) : getColorHighEmphasis(theme)}
        height={fieldHeight}
        editable={!disabled && !readonly}
        onBlur={nativeEvent => statusActiveHandler(onBlur, nativeEvent, false)}
        onFocus={nativeEvent => !readonly && statusActiveHandler(onFocus, nativeEvent, true)}
        placeholderTextColor={disabled ? getColorLowEmphasis(theme) : getColorMediumEmphasis(theme)}
        value={value}
        { ...inheritedProps }
      />
      { action === 'icon' && actionOnPress
        && <ActionIcon>
            <IconButton testID='action-icon' iconColor={iconColor} icon={iconName} onPress={actionOnPress} />
          </ActionIcon>
      }
      { action === 'image' && imageSource
        && <TouchableRipple color="highlight" size={fieldHeight / 2 + 5} onPress={actionOnPress}>
          <ActionImage testID='action-image' height={fieldHeight} source={imageSource} />
        </TouchableRipple>
      }
    </InputFeedbackContainer>
  );
};
