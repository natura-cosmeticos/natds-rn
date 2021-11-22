import React from 'react';

import { withTheme } from 'styled-components/native';
import { Size } from '@naturacosmeticos/natds-themes/react-native';
import { IconButtonBase } from '../IconButton/IconButtonBase';
import { Icon } from '../Icon/Icon';
import { Theme } from '../../common/themeSelectors';

export interface RatingBaseProps {
  testID?: string
  onPress?: () => void
  disabled?: boolean
  size: keyof Size
  accessibilityHint?: string
  accessibilityLabel?: string
  iconActive?: boolean
  iconFilled?: boolean
  isClickable: boolean
  theme: Theme
}

const RatingBaseComponent = ({
  testID, disabled = false, onPress, size, theme,
  accessibilityHint, accessibilityLabel, iconFilled = true, iconActive = true, isClickable,
}: RatingBaseProps): JSX.Element => {
  const getRatingColor = ({ color }: Theme) => (iconFilled && iconActive && !disabled ? '#F8B546' : color.mediumEmphasis);

  const iconName = iconFilled ? 'filled-action-rating' : 'outlined-action-rating';

  return (
    <IconButtonBase
      testID={testID}
      disabled={disabled || !isClickable}
      onPress={onPress}
      size={size}
      IconComponent={(
        <Icon
          accessibilityHint={accessibilityHint}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="imagebutton"
          size={size}
          name={iconName}
          style={{ color: getRatingColor(theme) }}
          testID={`${testID}-icon`}
        />
      )}
    />
  );
};

export const RatingBase = withTheme(RatingBaseComponent);
