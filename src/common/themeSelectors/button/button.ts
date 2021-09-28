import { Theme } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getButtonProps = (theme: Theme) => checkTheme(theme).button;

type ButtonTypes = 'outlined' | 'contained' | 'text';

const getButtonPropsByType = (theme: Theme, type: ButtonTypes) => getButtonProps(theme)[type];

export const getDefaultButtonProps = (theme: Theme) => getButtonPropsByType(theme, 'contained');
