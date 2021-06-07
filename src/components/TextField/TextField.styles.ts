import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import styled from 'styled-components/native';
import {
  buildColorWithOpacity,
  getBorderRadiusMedium,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getOpacityDisabledLow,
  getSizeLarge,
  getSizeMedium,
  getSizeMediumX,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { InputSizes } from './TextField.types';

interface InputStyleProps {
  disabled: boolean,
  readonly: boolean,
  size: InputSizes,
  theme: Theme,
}
const isSizeMediumX = (size: InputSizes) => size === 'mediumX';
const getFieldHeight = (size: InputSizes, theme: Theme) => (
  isSizeMediumX(size) ? getSizeMediumX(theme) : getSizeMedium(theme)
);
const getReadonlyColor = (theme: Theme) => buildColorWithOpacity(
  getColorLowEmphasis, getOpacityDisabledLow, theme,
);
const getTextColor = (disabled: boolean, theme: Theme) => (
  disabled ? getColorLowEmphasis(theme) : getColorHighEmphasis(theme)
);

export const getPlaceholderTextColor = (disabled: boolean, theme: Theme) => (
  disabled ? getColorLowEmphasis(theme) : getColorMediumEmphasis(theme)
);

export const Input = styled.TextInput<InputStyleProps>(({
  disabled, readonly, size, theme,
}): CSSObject => ({
  backgroundColor: readonly ? getReadonlyColor(theme) : getColorSurface(theme),
  borderRadius: getBorderRadiusMedium(theme),
  color: getTextColor(disabled, theme),
  flexGrow: 1,
  height: getFieldHeight(size, theme),
  overflow: 'hidden',
  paddingHorizontal: getSpacingSmall(theme),
}));

export const ActionImage = styled.Image<Omit<InputStyleProps, 'disabled' | 'readonly'>>(
  ({ size, theme }): CSSObject => ({
    borderBottomRightRadius: getBorderRadiusMedium(theme),
    borderTopRightRadius: getBorderRadiusMedium(theme),
    height: getFieldHeight(size, theme),
    width: getSizeLarge(theme),
  }),
);

export const ActionIcon = styled.View(({ theme }): CSSObject => ({
  paddingRight: getSpacingTiny(theme),
}));
