import { Size, Theme } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getRadiusSizes = (theme: Theme) => checkTheme(theme).borderRadius;

export const getRadiusBySize = (theme: Theme, size: keyof Size) => getRadiusSizes(theme)[size];

export const getBorderRadiusMedium = (theme: Theme) => getRadiusBySize(theme, 'medium');

export const getSize = (theme: Theme, size: keyof Size) => checkTheme(theme).size[size];

export const getSizeSemi = (theme: Theme) => getSize(theme, 'semi');
export const getSizeSemiX = (theme: Theme) => getSize(theme, 'semiX');
export const getSizeMedium = (theme: Theme) => getSize(theme, 'medium');
