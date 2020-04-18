/* eslint-disable no-unused-expressions, max-lines */
import React, { useState } from "react";
import {
  Wrapper,
  InputWrapper,
  TextInput,
  Label,
  AssistiveTexView,
  IconPress
} from "./NatTextInput.styles";
import { loadIcon } from "../../utils";
import { ThemeNaturaLight } from "../../themes/ThemeNaturaLight";
type NatTextInputProps = {
  accessibilityHint?: string,
  accessibilityLabel?: string,
  assistiveText?: string,
  autoCapitalize?: string,
  autoCorrect?: boolean,
  icon?: {
    content?: any,
    svg?: {
      name?: string,
      size?: number
    }
  },
  iconPress?: (...args: any[]) => any,
  label: string,
  margin?: string,
  multiline?: boolean,
  numberOfLines?: number,
  onBlur?: (...args: any[]) => any,
  onChangeText: (...args: any[]) => any,
  onFocus?: (...args: any[]) => any,
  onSubmitEditing?: (...args: any[]) => any,
  placeholder?: string,
  secureTextEntry?: boolean,
  size?: string,
  theme?: {},
  type?: string,
  value?: string
};
export const NatTextInput: React.SFC<NatTextInputProps> = ({
  onChangeText,
  value,
  type,
  label,
  placeholder,
  secureTextEntry,
  assistiveText,
  icon,
  iconPress,
  onFocus,
  onBlur,
  size,
  margin,
  multiline,
  numberOfLines,
  accessibilityLabel,
  accessibilityHint,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  theme
}) => {
  const isFilled = () => (value ? "filled" : "default");
  const [state, setState] = useState(isFilled());
  const handleOnFocus = func => {
    setState("active");
    onFocus && onFocus(func);
  };
  const handleOnBlur = func => {
    const currentState = value ? "filled" : "default";
    setState(currentState);
    onBlur && onBlur(func);
  };
  const renderIcon = iconData => {
    const iconAttributes = {
      color: ThemeNaturaLight.palette.text.primary,
      size: 24
    };
    return (
      <IconPress onPress={iconPress}>
        {loadIcon(iconData, iconAttributes)}
      </IconPress>
    );
  };
  const defaultSize = (propSize, lines) => {
    if (lines === 1) {
      return propSize === "small" ? "40px" : "56px";
    }
    if (lines > 1) return `${lines * 40}px`;
    return propSize === "small" ? "40px" : "56px";
  };
  const defaultHeight = (propSize, lines) => {
    if (lines === 1) {
      return propSize === "small" ? 36 : 52;
    }
    if (lines > 1) return lines * 40 - 4;
    return propSize === "small" ? 36 : 52;
  };
  return (
    <Wrapper
      marginDefault={margin}
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      theme={theme}
    >
      {label !== "" && (
        <Label type={type} state={state} theme={theme} text={label} />
      )}
      <InputWrapper
        type={type}
        state={state}
        defaultSize={defaultSize(size, numberOfLines)}
        theme={theme}
      >
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholder={placeholder}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          onSubmitEditing={onSubmitEditing}
          value={value}
          multiline={multiline}
          numberOfLines={numberOfLines}
          editable={type !== "disabled"}
          autoCapitalize={autoCapitalize}
          autoCorrect={autoCorrect}
          type={type}
          size={size}
          state={state}
          style={{ height: defaultHeight(size, numberOfLines) }}
          theme={theme}
        />
        {icon && renderIcon(icon)}
      </InputWrapper>
      {assistiveText !== "" && (
        <AssistiveTexView
          type={type}
          state={state}
          theme={theme}
          text={assistiveText}
        />
      )}
    </Wrapper>
  );
};
NatTextInput.defaultProps = {
  assistiveText: "",
  icon: false,
  iconPress: null,
  margin: "tiny",
  multiline: false,
  numberOfLines: 1,
  theme: ThemeNaturaLight,
  type: "default",
  value: ""
};
