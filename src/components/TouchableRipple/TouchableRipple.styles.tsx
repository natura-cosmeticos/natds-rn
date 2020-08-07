import styled from 'styled-components/native';

import { getColorPrimary, Theme, getColorSecondary } from '../../common/themeSelectors';

export const Container = styled.View<{ size: number }>(({ size }) => ({
  alignItems: 'center',
  height: size,
  justifyContent: 'center',
  width: size,
}));

export const Ripple = styled.View<{
  theme: Theme;
  size: number;
  color: string;
}>(({ theme, size, color }) => ({
  backgroundColor: color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: size / 2,
  height: size,
  left: 0,
  position: 'absolute',
  top: 0,
  width: size,
}));
