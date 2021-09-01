import { File } from '@naturacosmeticos/natds-themes/react-native';
import { Theme, checkTheme } from '../theme/theme';

const getAssets = (theme: Theme) => checkTheme(theme).asset;

type Typography = keyof File;

const getFontAssets = (theme: Theme) => getAssets(theme).font;
const getFontFileByType = (theme: Theme, type: Typography) => getFontAssets(theme).file[type];

export const getDisplayFontFile = (theme: Theme) => getFontFileByType(theme, 'display');
export const getHeadlineFontFile = (theme: Theme) => getFontFileByType(theme, 'headline');
export const getBodyFontFile = (theme: Theme) => getFontFileByType(theme, 'body');
