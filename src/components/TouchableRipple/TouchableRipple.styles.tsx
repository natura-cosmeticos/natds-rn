import styled from 'styled-components/native';
import {
  getColorPrimary,
  getColorSecondary,
  getColorHighlight,
  Theme,
} from '../../common/themeSelectors';
import { TouchableRippleProps, TouchableRippleColors } from './TouchableRipple';

const getBackgroundColor = (color: TouchableRippleColors, theme: Theme) => {
  let colorCode;

  switch (color) {
    case 'secondary':
      colorCode = getColorSecondary(theme);
      break;
    case 'primary':
      colorCode = getColorPrimary(theme);
      break;
    case 'highlight':
      colorCode = getColorHighlight(theme);
      break;
    default:
      colorCode = getColorPrimary(theme);
  }

  return colorCode;
};

type RippleProps = Pick<TouchableRippleProps, 'theme' | 'size' | 'color'>

export const RippleWrapper = styled.View<Pick<TouchableRippleProps, 'hideOverflow'>>(({ hideOverflow }) => ({
  bottom: 0,
  elevation: 999,
  left: 0,
  overflow: hideOverflow ? 'hidden' : 'visible',
  position: 'absolute',
  right: 0,
  top: 0,
  zIndex: 999,
}));

export const Ripple = styled.View<Required<RippleProps>>(({
  theme, size, color,
}) => ({
  backgroundColor: getBackgroundColor(color, theme),
  borderRadius: size / 2,
  height: size,
  position: 'absolute',
  width: size,
}));
