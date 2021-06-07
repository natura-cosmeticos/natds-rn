/* eslint-disable max-lines */
import React, { Dispatch, SetStateAction } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { useTheme } from 'styled-components/native';
import {
  ActionIcon, ActionImage, getPlaceholderTextColor, Input,
} from './TextField.styles';
import { InputFeedbackContainer } from '../InputFeedbackContainer';
import { TextFieldProps } from './TextField.types';
import { IconButton } from '../IconButton';

const statusActiveHandler = (
  event: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
  nativeEvent: NativeSyntheticEvent<TextInputFocusEventData>,
  status: boolean,
  setActive: Dispatch<SetStateAction<boolean>>,
) => {
  setActive(status);
  if (event) event(nativeEvent);
};

const isFieldFilled = ({ readonly, value }: Pick<TextFieldProps, 'readonly' | 'value'>) => !readonly && value !== '';
const isEditable = ({ disabled, readonly }: Pick<TextFieldProps, 'disabled' | 'readonly'>) => !disabled && !readonly;

export const TextField = (props: TextFieldProps) => {
  const theme = useTheme();
  const [active, setActive] = React.useState(false);
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
    readonly = false,
    required = false,
    size = 'mediumX',
    value = '',
  }: TextFieldProps = props;
  const getContainerProps = () => {
    if (disabled) return { disabled, helperText };
    if (feedback) return { active, feedback, helperText };

    return { active };
  };

  return (
    <InputFeedbackContainer
      filled={isFieldFilled({ readonly, value })}
      helperText={helperText}
      label={label}
      required={required}
      {...getContainerProps()}
    >
      <Input testID="input"
        disabled={disabled}
        editable={isEditable({ disabled, readonly })}
        onBlur={nativeEvent => statusActiveHandler(onBlur, nativeEvent, false, setActive)}
        onFocus={nativeEvent => !readonly
          && statusActiveHandler(onFocus, nativeEvent, true, setActive)}
        placeholderTextColor={getPlaceholderTextColor(disabled, theme)}
        readonly={readonly}
        size={size}
        value={value}
        { ...inheritedProps }
      />
      { action === 'icon' && actionOnPress
        && <ActionIcon>
            <IconButton testID='action-icon' iconColor={iconColor} icon={iconName} onPress={actionOnPress} />
          </ActionIcon>
      }
      { action === 'image' && imageSource
        && <ActionImage testID='action-image' size={size} source={imageSource} />
      }
    </InputFeedbackContainer>
  );
};
