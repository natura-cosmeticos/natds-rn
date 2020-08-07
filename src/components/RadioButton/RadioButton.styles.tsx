
import styled from 'styled-components/native';
import {
  getColorPrimary,
  Theme,
  getColorSecondary,
  getColorLowEmphasis,
  getColorOnBackground,
  getColorMediumEmphasis,
} from '../../common/themeSelectors';

function getCircleBorderColor(selected = false, disabled: boolean, color: string, theme: Theme) {
  if (disabled) {
    return getColorLowEmphasis(theme);
  }

  if (selected) {
    return color === 'primary' ? getColorPrimary(theme) : getColorSecondary(theme);
  }

  return getColorMediumEmphasis(theme);
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 1,
})`
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
  selected?: boolean;
  disabled: boolean;
}>(({
  theme,
  color,
  selected,
  disabled,
}) => ({
  alignItems: 'center',
  borderColor: getCircleBorderColor(selected, disabled, color, theme),
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
