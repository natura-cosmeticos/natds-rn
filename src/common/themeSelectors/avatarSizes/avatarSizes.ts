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

  return sizes[size] || getAvatarSizes(theme).standard;
};
