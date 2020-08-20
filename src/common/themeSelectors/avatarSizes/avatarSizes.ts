import { Theme, checkTheme } from '..';

interface AvatarProperties {
  size: number;
  fontSize: string;
}

const getAvatarSizes = (theme: Theme) => checkTheme(theme).avatarSizes;

export type Size = 'huge' | 'large' | 'medium' | 'small' | 'tiny'

export const getAvatarPropsBySize = (
  theme: Theme, size: Size,
): AvatarProperties => getAvatarSizes(theme)[size];
