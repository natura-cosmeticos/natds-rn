import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { css, CSSObject, CSSProperties } from 'styled-components';
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

export const Input = styled.TextInput<InputStyleProps & CSSProperties>`
  ${({
    disabled, hasActionIcon, readonly, size, theme, multiline = false,
  }) => css`
    background-color: ${readonly ? getReadonlyColor(theme) : getColorSurface(theme)};
    border-radius: ${getBorderRadiusMedium(theme)};
    color: ${getTextColor(disabled, theme)};
    flex-grow: 1;
    font-family: ${theme.textField.content.primary.fontFamily};
    font-size: ${theme.textField.content.fontSize}px;
    font-weight: ${theme.textField.content.primary.fontWeight};
    letter-spacing: ${theme.textField.content.letterSpacing}px;
    max-width: 100%;
    ${multiline && `line-height: ${theme.textField.content.fontSize * theme.textField.content.lineHeight}px;`};
    min-height: ${getFieldHeight(size, theme)};
    overflow: hidden;
    padding-left: ${getSpacingSmall(theme)}px;
    padding-right: ${hasActionIcon ? 0 : getSpacingSmall(theme)}px;
    width: 10px;
  `}
`;

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

export const ActionIasdascon = styled.TextInput(({ theme }): CSSObject => ({
  paddingHorizontal: getSpacingTiny(theme),
}));
