import React, { useState } from 'react';
import { withTheme } from 'styled-components/native';
import { Color } from '@naturacosmeticos/natds-themes/react-native';
import { IconName } from '@naturacosmeticos/natds-icons';
import { Icon } from '../Icon';
import { Label, LabelText, Surface } from './ButtonStyles';
import { Theme } from '../../common/themeSelectors';
import { TouchableRipple, showRipple } from '../TouchableRipple/TouchableRipple';

export type ButtonSizes = 'large' | 'medium' | 'small'
export type ButtonTypes = 'contained' | 'outlined' | 'text'
export type IconPositions = 'left' | 'right'

export interface ButtonBaseProps {
  accessibilityHint?: string
  accessibilityLabel?: string
  disabled?: boolean
  iconName?: IconName
  iconPosition?: IconPositions
  onPress: () => void
  size: ButtonSizes
  testID?: string
  text: string
  textColor: keyof Color
  theme: Theme
  type?: ButtonTypes
}

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
      <Surface
        accessibilityHint={accessibilityHint}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="button"
        disabled={disabled}
        onLayout={event => showRipple(event, setRippleSize)}
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
          { iconName
            && <Icon
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
