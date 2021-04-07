/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Color } from '@naturacosmeticos/natds-themes/react-native';
import { Text } from 'react-native';
import styled, { withTheme } from 'styled-components/native';
import {
  Theme,
  getButtonPropsBySize,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorOnPrimary,
  getColorPrimary,
  getRadiusBySize,
  getShadowBySize,
  getColorByName,
  getSpacingTiny,
  getDefaultButtonProps,
} from '../../common/themeSelectors';
import { Icon } from '../Icon';
import { TouchableRipple, getRippleSizeForHorizontalComponents } from '../TouchableRipple/TouchableRipple';

export type ButtonSizes = 'large' | 'medium' | 'small'
export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type IconPositions = 'left' | 'right'

export interface ButtonBaseProps {
  accessibilityHint?: string
  accessibilityLabel?: string
  disabled?: boolean
  textColor: TextColors
  onPress: () => void
  size: ButtonSizes
  testID?: string
  text: string
  textColor: keyof Color
  theme: Theme
  type?: ButtonTypes
}

const getButtonPropsByType = (theme: Theme, type: ButtonTypes, disabled: boolean) => {
  const styles = {
    contained: {
      background: disabled ? getColorLowEmphasis(theme) : getColorPrimary(theme),
    },
    outlined: {
      borderColor: disabled ? getColorMediumEmphasis(theme) : getColorPrimary(theme),
      borderWidth: 1,
    },
  };

  return styles[type];
};

const getShadowByType = (type: ButtonTypes, disabled: boolean, theme: Theme) => (
  type === 'contained' && !disabled
    ? getShadowBySize(theme, 'tiny')
    : {}
);

const Base = styled.View<Pick<ButtonBaseProps, 'type' | 'iconPosition' | 'theme' | 'disabled' | 'size'>>(({
  type = 'contained', iconPosition, theme, disabled = false, size,
}) => ({
  ...getButtonPropsBySize(theme, size),
  ...getButtonPropsByType(theme, type, disabled),
  alignContent: 'center',
  alignItems: 'center',
  borderRadius: getRadiusBySize(theme, 'medium'),
  flexDirection: (iconPosition === 'right' ? 'row' : 'row-reverse'),
  justifyContent: 'center',
}));

const Label = ({
  iconName, iconPosition, text, textColor, theme,
}: Pick<ButtonBaseProps, 'iconName' | 'iconPosition' | 'text' | 'textColor' | 'theme'>) => (iconName ? (
  <>
    <Text
      style={{
        ...getDefaultButtonProps(theme),
        alignSelf: 'center',
        color: getColorByName(theme, textColor),
        fontWeight: '500', // override of broken styles in Theme.button
        lineHeight: undefined, // override of broken styles in Theme.button
        marginEnd: iconPosition === 'right' ? getSpacingTiny(theme) : 0,
        marginStart: iconPosition === 'left' ? getSpacingTiny(theme) : 0,
      }}
      testID="label-text"
    >
      {text.toUpperCase()}
    </Text>
    <Icon
      color={textColor}
      name={iconName}
      size="small" />
  </>
) : (
  <Text
    style={{
      ...getDefaultButtonProps(theme),
      alignSelf: 'center',
      color: getColorByName(theme, textColor),
      fontWeight: '500', // override of broken styles in Theme.button
      lineHeight: undefined, // override of broken styles in Theme.button
    }}
    testID="label-text"
  >
    {text.toUpperCase()}
  </Text>
));

const ButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  textColor,
  onPress,
  size = 'medium',
  testID = 'button-base',
  text,
  theme,
  type = 'contained',
}: ButtonBaseProps) => {
  const [rippleSize, setRippleSize] = useState(0);

  return (
    <TouchableRipple
        color="highlight"
        disabled={disabled}
        hideOverflow={true}
        onPress={disabled ? () => {} : onPress}
        size={rippleSize}
        >
      <Base
        disabled={disabled}
        onLayout={event => getRippleSizeForHorizontalComponents(event, setRippleSize)}
        size={size}
        style={getShadowByType(type, disabled, theme)}
        testID={testID}
        type={type}
      >
        <Label
          iconName={iconName}
          iconPosition={iconPosition}
          text={text}
          textColor={textColor}
          theme={theme}
        />
      </Base>
      </TouchableRipple>
  );
};


export const ButtonBase = withTheme(ButtonComponent);
