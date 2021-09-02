
import styled from 'styled-components/native';
import {
  Theme,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorOnBackground,
  getColorPrimary,
  getColorSecondary,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { CheckboxColors } from './Checkbox';

function getBoxColor(
  selected = false,
  disabled: boolean,
  color: CheckboxColors,
  theme: Theme,
) {
  if (disabled) {
    return getColorLowEmphasis(theme);
  }

  if (selected) {
    return color === 'secondary' ? getColorSecondary(theme) : getColorPrimary(theme);
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
  marginLeft: getSpacingTiny(theme),
}));


export const Box = styled.View<{
  theme: Theme;
  color: CheckboxColors;
  selected?: boolean;
  disabled: boolean;
}>(({
  theme,
  color,
  selected,
  disabled,
}) => ({
  alignItems: 'center',
  backgroundColor: selected ? getBoxColor(selected, disabled, color, theme) : 'transparent',
  borderColor: getBoxColor(selected, disabled, color, theme),
  borderRadius: 3,
  borderWidth: 2,
  height: 20,
  justifyContent: 'center',
  width: 20,
}));

export const Wrapper = styled.View(({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 8,
}));
