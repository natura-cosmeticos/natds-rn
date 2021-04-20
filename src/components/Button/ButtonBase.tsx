import React, { useState } from 'react';
import { withTheme } from 'styled-components/native';
import { Icon } from '../Icon';
import {
  getButtonShadowByType, Label, LabelText, Surface,
} from './Button.styles';
import { TouchableRipple, showRipple } from '../TouchableRipple/TouchableRipple';
import { ButtonBaseProps } from './Button.types';

const ButtonComponent = ({
  accessibilityHint,
  accessibilityLabel,
  disabled = false,
  iconName,
  iconPosition = 'right',
  onPress,
  size = 'medium',
  testID = 'button-base',
  text,
  textColor,
  theme,
  type = 'contained',
}: ButtonBaseProps) => {
  const [rippleSize, setRippleSize] = useState(0);

  return (
    <TouchableRipple
      color="highlight"
      disabled={disabled}
      hideOverflow={true}
      onPress={disabled ? () => { } : onPress}
      size={rippleSize}
    >
      <Surface
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        disabled={disabled}
        onLayout={event => showRipple(event, setRippleSize)}
        style={getButtonShadowByType({ disabled, theme, type })}
        size={size}
        testID={testID}
        type={type}
      >
        <Label iconPosition={iconPosition}>
          <LabelText
            iconName={iconName}
            iconPosition={iconPosition}
            testID="button-label"
            textColor={textColor}
          >
            {text.toUpperCase()}
          </LabelText>
          {iconName
            && <Icon
              accessibilityRole="imagebutton"
              color={textColor}
              name={iconName}
              size="small" />
          }
        </Label>
      </Surface>
    </TouchableRipple>
  );
};

export const ButtonBase = withTheme(ButtonComponent);
