import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Theme, getColorPrimary } from '../../common/themeSelectors';

export const Layer = styled.View<{
  size: number;
}>(({ size }) => ({
  height: size,
  width: size,
}));

export const Line = styled.View<{ theme: Theme; size: number }>(
  ({ theme, size }) => ({
    borderColor: getColorPrimary(theme),
    borderRadius: size / 2,
    borderWidth: size / 10,
    height: size,
    width: size,
  }),
);

export const Container = styled.View<{
  size: number;
}>(({ size }) => ({
  height: size / 2,
  overflow: 'hidden',
  width: size,
}));

export const Loop = styled.View(() => ({
  ...StyleSheet.absoluteFillObject,
  alignItems: 'center',
  justifyContent: 'center',
}));
