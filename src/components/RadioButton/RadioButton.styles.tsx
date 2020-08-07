
import styled from 'styled-components/native';
import {
  getColorPrimary, Theme, getColorSecondary, getColorLowEmphasis, getColorOnBackground,
} from '../../common/themeSelectors';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text<{ theme: Theme; disabled: boolean }>(({ theme, disabled }) => ({
  color: disabled ? getColorLowEmphasis(theme) : getColorOnBackground(theme),
  fontSize: 14,
  letterSpacing: 0.22,
  marginLeft: 8,
}));

export const Circle = styled.View<{
  theme: Theme;
  color: string;
  disabled: boolean;
}>(({ theme, color, disabled }) => ({
  alignItems: 'center',
  // eslint-disable-next-line no-nested-ternary
  borderColor: disabled ? getColorLowEmphasis(theme) : color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: 12,
  borderWidth: '2px',
  height: 20,
  justifyContent: 'center',
  width: 20,
}));

export const Center = styled.View<{ theme: Theme; color: string }>(({ theme, color }) => ({
  backgroundColor: color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme),
  borderRadius: 12,
  height: 10,
  width: 10,
}));
