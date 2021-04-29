import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

export const getCaptionFont = (theme: Theme) => checkTheme(theme).caption;
