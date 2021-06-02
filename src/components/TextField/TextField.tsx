/* eslint-disable max-lines */
import React from 'react';
import {
  Image,
  TextInput,
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
    iconColor,
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
          paddingHorizontal: getSpacingSmall(theme),
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
        onFocus={nativeEvent => !readonly && focusHandler(nativeEvent)}
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
/* eslint-enable complexity, max-statements */
