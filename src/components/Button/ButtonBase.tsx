import React from 'react';
import { withTheme } from 'styled-components/native';
import { Icon } from '../Icon';
import {
  getButtonShadowByType, Label, LabelText, Surface,
} from './Button.styles';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { ButtonBaseProps } from './Button.types';
import { getRadiusBySize } from '../../common/themeSelectors';

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
}: ButtonBaseProps) => (
    <TouchableRipple
      color="highlight"
      disabled={disabled}
      hideOverflow={true}
      onPress={disabled ? () => { } : onPress}
      style={{ borderRadius: theme.button.borderRadius }}
    >
      <Surface
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        disabled={disabled}
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
            type={type}
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

export const ButtonBase = withTheme(ButtonComponent);
