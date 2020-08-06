import {
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';

import { Theme, getColorPrimary, getColorSecondary } from '../../../common/themeSelectors';

export const Root = styled.View(({ size }: { size: number }) => ({
  height: size,
  width: size,
}));

export const Layer = styled.View<{
  size: number,
}>(({ size }) => ({
  height: size,
  width: size,
}));

export const Line = styled.View<{
  color: string;
  theme: Theme;
  size: number;
}>(({ color, theme, size }) => ({
  borderColor: color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: size / 2,
  borderWidth: size / 10,
  height: size,
  width: size,
}));

export const Container = styled.View(({ size }: { size: number }) => ({
  height: size / 2,
  overflow: 'hidden',
  width: size,
}));

export const Loop = styled.View(() => ({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'center',
}));