import styled from 'styled-components/native';

import { getColorPrimary, Theme, getColorSecondary } from '../../common/themeSelectors';
import { TouchableRippleColors } from './TouchableRipple';

export const Container = styled.View<{ size: number }>(({ size }) => ({
  alignItems: 'center',
  height: size,
  justifyContent: 'center',
  width: size,
}));

export const Ripple = styled.View<{
  theme: Theme;
  size: number;
  color: TouchableRippleColors;
}>(({ theme, size, color }) => ({
  backgroundColor: color === 'secondary' ? getColorSecondary(theme) : getColorPrimary(theme),
  borderRadius: size / 2,
  height: size,
  left: 0,
  position: 'absolute',
  top: 0,
  width: size,
}));
