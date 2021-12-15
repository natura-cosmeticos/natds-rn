/* eslint-disable max-len */
import styled from 'styled-components/native';
import {
  Theme, getColorOnPrimary, getColorPrimary, getAvatarBySize,
} from '../../common/themeSelectors';
import { AvatarSizes } from './Avatar.types';
import { Icon } from '../Icon/Icon';

interface AvatarStyleProps {
  size: AvatarSizes;
  theme: Theme;
}


// List of deprecated sizes used to conditionally render the avatar
const deprecatedSizes = ['tiny', 'small', 'large', 'huge'];

const getAvatarFontSize = (theme, size) => getAvatarBySize(size, theme).fontSize;

const getAvatarSize = (theme, size) => getAvatarBySize(size, theme).size;

const getBorderRadiusBySize = (size: AvatarSizes, theme: Theme) => {
  if (!deprecatedSizes.includes(size)) {
    return {
      borderRadius: theme.avatar[size].borderRadius,
      height: theme.size[size],
      width: theme.size[size],
    };
  }

  return {
    borderRadius: getAvatarSize(theme, size),
    height: getAvatarSize(theme, size),
    width: getAvatarSize(theme, size),
  };
};

const getFontsBySize = (size: AvatarSizes, theme: Theme) => {
  if (!deprecatedSizes.includes(size)) {
    return {
      fontFamily: theme.avatar.primary.fontFamily,
      fontSize: theme.avatar[size].fontSize,
      fontWeight: theme.avatar.primary.fontWeight,
      letterSpacing: theme.avatar[size].letterSpacing,
      lineHeight: theme.avatar[size].fontSize * theme.avatar[size].lineHeight,
    };
  }

  return { fontSize: getAvatarFontSize(theme, size) };
};

export const Container = styled.View(({ size, theme }: AvatarStyleProps) => ({
  ...getBorderRadiusBySize(size, theme),
  alignItems: 'center',
  backgroundColor: getColorPrimary(theme),
  justifyContent: 'center',
}));

export const AvatarImage = styled.Image(({ size, theme }: AvatarStyleProps) => ({
  ...getBorderRadiusBySize(size, theme),
}));

export const AvatarLetter = styled.Text(({ size, theme }: AvatarStyleProps) => ({
  ...getFontsBySize(size, theme),
  alignSelf: 'center',
  color: getColorOnPrimary(theme),
  fontFamily: theme.avatar.primary.fontFamily,
  fontWeight: theme.avatar.primary.fontWeight,

}));

export const AvatarIcon = styled(Icon)(({ theme }) => ({
  color: getColorOnPrimary(theme),
}));
