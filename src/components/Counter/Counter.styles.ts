import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import styled from 'styled-components/native';
import {
  getBorderRadiusMedium,
  getColorHighEmphasis,
  getColorLowEmphasis,
  getColorMediumEmphasis,
  getColorSurface,
  getSize,
  getSizeMediumX,
  getSpacingMicro,
  getSpacingSmall,
  getTypographyStyles,
} from '../../common/themeSelectors';
import { CounterSizes } from './Counter.types';

export const Label = styled.Text<{ theme: Theme }>(({ theme }): CSSObject => {
  const { subtitle2 } = getTypographyStyles(theme);

  return ({
    color: getColorMediumEmphasis(theme),
    fontSize: subtitle2.fontSize,
    fontWeight: subtitle2.fontWeight,
    letterSpacing: subtitle2.letterSpacing,
    marginBottom: getSpacingMicro(theme),
  });
});

export const Container = styled.View<{
  size: CounterSizes, theme: Theme
}>(({ size, theme }): CSSObject => ({
  alignItems: 'center',
  alignSelf: 'flex-start',
  backgroundColor: getColorSurface(theme),
  borderColor: getColorLowEmphasis(theme),
  borderRadius: getBorderRadiusMedium(theme),
  borderWidth: 1,
  flexDirection: 'row',
  height: getSize(theme, size),
}));

export const Input = styled.TextInput<{ theme: Theme }>(({ theme }): CSSObject => {
  const { body1 } = getTypographyStyles(theme);

  return ({
    borderColor: getColorLowEmphasis(theme),
    borderLeftWidth: 1,
    borderRightWidth: 1,
    color: getColorHighEmphasis(theme),
    fontSize: body1.fontSize,
    fontWeight: body1.fontWeight,
    height: '100%',
    letterSpacing: body1.letterSpacing,
    paddingHorizontal: getSpacingSmall(theme),
    textAlign: 'center',
    width: getSizeMediumX(theme),
  });
});
