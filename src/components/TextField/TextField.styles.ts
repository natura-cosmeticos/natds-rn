import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { CSSObject } from 'styled-components';
import styled from 'styled-components/native';
import {
  getBorderRadiusMedium,
  getSizeLarge,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';

interface InputStyleProps {
  backgroundColor: string,
  color: string,
  height: number,
  theme: Theme,
}

export const Input = styled.TextInput<InputStyleProps>(({
  backgroundColor, color, height, theme,
}): CSSObject => ({
  backgroundColor,
  borderRadius: getBorderRadiusMedium(theme),
  color,
  flexGrow: 1,
  height,
  overflow: 'hidden',
  paddingHorizontal: getSpacingSmall(theme),
}));

export const ActionImage = styled.Image(({ height, theme }): CSSObject => ({
  borderBottomRightRadius: getBorderRadiusMedium(theme),
  borderTopRightRadius: getBorderRadiusMedium(theme),
  height,
  width: getSizeLarge(theme),
}));

export const ActionIcon = styled.View(({ theme }): CSSObject => ({
  paddingRight: getSpacingTiny(theme),
}));
