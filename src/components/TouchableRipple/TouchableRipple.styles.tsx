import styled from 'styled-components/native';

import {
  getColorPrimary, Theme, getColorSecondary, getColorOnSecondary,
} from '../../common/themeSelectors';
import { TouchableRippleColors } from './TouchableRipple';

export const Container = styled.View<{ size: number }>(({ size }) => ({
  alignItems: 'center',
  height: size,
  justifyContent: 'center',
  width: size,
}));

const getBackgroundColor = (color, theme) => {
  let colorCode;

  switch (color) {
    case 'secondary':
      colorCode = getColorSecondary(theme);
      break;
    case 'primary':
      colorCode = getColorPrimary(theme);
      break;
    case 'onSecondary':
      colorCode = getColorOnSecondary(theme);
      break;
    default:
      colorCode = getColorPrimary(theme);
  }

  return colorCode;
};

export const Ripple = styled.View<{
  theme: Theme;
  size: number;
  color: TouchableRippleColors;
}>(({ theme, size, color }) => ({
  backgroundColor: getBackgroundColor(color, theme),
  borderRadius: size / 2,
  height: size,
  left: 0,
  position: 'absolute',
  top: 0,
  width: size,
}));
