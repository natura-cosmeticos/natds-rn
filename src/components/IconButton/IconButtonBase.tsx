import React from 'react';
import { useTheme } from 'styled-components/native';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import { getSize } from '../../common/themeSelectors';
import {
  getContainerElevation,
} from './IconButton.helpers';
import { IconButtonBaseProps } from './IconButton.types';
import { IconContainer } from './IconButton.styles';

export const IconButtonBase = ({
  size = 'semi',
  IconComponent,
  backgroundStyle = 'none',
  disabled = false,
  onPress,
  testID,
}: IconButtonBaseProps) => {
  const theme = useTheme();

  return (
    <TouchableRipple
      color="highlight"
      size={getSize(theme, size) / 2 + 5}
      onPress={onPress}
      disabled={disabled}
      testID={`${testID}-button`}
      style={{ borderRadius: 50 }}
    >
      <IconContainer
        disabled={disabled}
        size={size}
        backgroundStyle={backgroundStyle}
        style={getContainerElevation(backgroundStyle, theme)}
        testID={`${testID}-background`}
      >
       {IconComponent}
      </IconContainer>
    </TouchableRipple>
  );
};
