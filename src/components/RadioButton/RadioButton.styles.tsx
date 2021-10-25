
import styled from 'styled-components/native';
import {
  getColorPrimary,
  Theme,
  getColorSecondary,
  getColorLowEmphasis,
  getColorOnBackground,
  getColorMediumEmphasis,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { RadioButtonColors } from './RadioButton';

function getCircleColor(
  selected = false,
  disabled: boolean,
  color: RadioButtonColors,
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
  fontFamily: theme.radioButton.label.primary.fontFamily,
  fontSize: theme.radioButton.label.fontSize,
  fontWeight: theme.radioButton.label.primary.fontWeight,
  letterSpacing: theme.radioButton.label.letterSpacing,
  lineHeight: theme.radioButton.label.fontSize * theme.radioButton.label.lineHeight,
  marginLeft: getSpacingTiny(theme),
}));


export const Circle = styled.View<{
  theme: Theme;
  color: RadioButtonColors;
  selected?: boolean;
  disabled: boolean;
}>(({
  theme,
  color,
  selected,
  disabled,
}) => ({
  alignItems: 'center',
  borderColor: getCircleColor(selected, disabled, color, theme),
  borderRadius: 12,
  borderWidth: '2px',
  height: 20,
  justifyContent: 'center',
  width: 20,
}));

export const Center = styled.View<{
  theme: Theme;
  color: RadioButtonColors;
  selected?: boolean;
  disabled: boolean;
}>(({
  theme,
  color,
  selected,
  disabled,
}) => ({
  backgroundColor: getCircleColor(selected, disabled, color, theme),
  borderRadius: 12,
  height: 10,
  width: 10,
}));

export const Wrapper = styled.View(() => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  padding: 8,
}));
