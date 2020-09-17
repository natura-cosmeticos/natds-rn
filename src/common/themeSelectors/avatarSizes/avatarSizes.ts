/* eslint-disable sort-keys */
import { Theme, checkTheme } from '..';

const getAvatarSizes = (theme: Theme) => checkTheme(theme).avatarSizes;

export type AvatarSize = 'tiny'| 'small'| 'standard' | 'large' | 'huge'

export const getAvatarBySize = (size: string, theme: Theme) => {
  const sizes = {
    tiny: getAvatarSizes(theme).tiny,
    small: getAvatarSizes(theme).small,
    standard: getAvatarSizes(theme).standard,
    large: getAvatarSizes(theme).large,
    huge: getAvatarSizes(theme).huge,
  };

  const fontSize = {
    tiny: '12px',
    small: '14px',
    standard: '16px',
    large: '16px',
    huge: '24px',
  };

  return Object.assign(sizes[size], { fontSize: fontSize[size] });
};
