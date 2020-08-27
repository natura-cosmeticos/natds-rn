import { Theme, checkTheme } from '..';

const getAvatarSizes = (theme: Theme) => checkTheme(theme).avatarSizes;

export const getAvatarBySize = (size: string, theme: Theme) => {
  const sizes = {
    huge: getAvatarSizes(theme).huge,
    large: getAvatarSizes(theme).large,
    small: getAvatarSizes(theme).small,
    standard: getAvatarSizes(theme).standard,
    tiny: getAvatarSizes(theme).tiny,
  };

  const fontSize = {
    huge: '24px',
    large: '16px',
    small: '14px',
    standard: '16px',
    tiny: '12px',
  };

  return Object.assign(sizes[size], { fontSize: fontSize[size] });
};
