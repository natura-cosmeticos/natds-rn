
import styled from 'styled-components/native';
import {
  getColorPrimary, Theme, getColorSecondary,
} from '../../common/themeSelectors';

export const Circle = styled.View<{
  theme: Theme;
  color: string;
  disabled: boolean;
}>(({ theme, color, disabled }) => ({
  alignItems: 'center',
  // eslint-disable-next-line no-nested-ternary
  borderColor: disabled ? '#777' : color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: 12,
  borderWidth: '2px',
  height: 20,
  justifyContent: 'center',
  width: 20,
}));

export const Center = styled.View<{ theme: Theme; color: string }>(({ theme, color }) => ({
  backgroundColor: color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: 100,
  height: 10,
  width: 10,
}));
