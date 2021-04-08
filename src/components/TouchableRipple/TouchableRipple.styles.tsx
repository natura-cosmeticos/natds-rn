import styled from 'styled-components/native';
import {
  getColorPrimary,
  getColorSecondary,
  getColorHighlight,
  Theme,
} from '../../common/themeSelectors';
import { TouchableRippleProps, TouchableRippleColors } from './TouchableRipple';

type ContainerProps = Pick<TouchableRippleProps, 'hideOverflow'>

export const Container = styled.View<ContainerProps>(({ hideOverflow }) => ({
  // overflow: hideOverflow ? 'hidden' : 'visible',
}));

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

type RippleProps = Pick<TouchableRippleProps, 'theme'>
  & Pick<TouchableRippleProps, 'size'>
  & Pick<TouchableRippleProps, 'color'>

export const RippleWrapper = styled.View<ContainerProps>(({ hideOverflow }) => ({
  bottom: 0,
  left: 0,
  overflow: hideOverflow ? 'hidden' : 'visible',
  position: 'absolute',
  right: 0,
  top: 0,
}));

export const Ripple = styled.View<Required<RippleProps>>(({
  theme, size, color,
}) => ({
  backgroundColor: getBackgroundColor(color, theme),
  borderRadius: size / 2,
  elevation: 999,
  height: size,
  position: 'absolute',
  width: size,
  zIndex: 999,
}));
