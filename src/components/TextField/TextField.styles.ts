import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject, CSSProperties } from 'styled-components';
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
  hasActionIcon: boolean,
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

export const Input = styled.TextInput<InputStyleProps & CSSProperties>(({
  disabled, hasActionIcon, readonly, size, theme,
}): CSSObject => ({
  backgroundColor: readonly ? getReadonlyColor(theme) : getColorSurface(theme),
  borderRadius: getBorderRadiusMedium(theme),
  color: getTextColor(disabled, theme),
  flexGrow: 1,
  maxWidth: '100%',
  minHeight: getFieldHeight(size, theme),
  overflow: 'hidden',
  paddingLeft: getSpacingSmall(theme),
  paddingRight: hasActionIcon ? 0 : getSpacingSmall(theme),
  width: 10,
}));

export const ActionImage = styled.View<Pick<InputStyleProps, 'size' | 'theme'>>(
  ({ size, theme }): CSSObject => ({
    borderBottomRightRadius: getBorderRadiusMedium(theme),
    borderTopRightRadius: getBorderRadiusMedium(theme),
    maxHeight: getFieldHeight(size, theme),
    overflow: 'hidden',
    width: getSizeLarge(theme),
  }),
);

export const ActionIcon = styled.View(({ theme }): CSSObject => ({
  paddingHorizontal: getSpacingTiny(theme),
}));
