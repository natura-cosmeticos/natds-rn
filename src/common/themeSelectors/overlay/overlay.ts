import { Theme, checkTheme } from '..';

const getOverlay = (theme: Theme) => checkTheme(theme).overlay;

export const getOverlaySolidBlack = (theme: Theme) => getOverlay(theme).solidBlack;
