import { Button, Theme } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getButtonProps = (theme: Theme) => checkTheme(theme).button;

type ButtonTypes = keyof Button;

const getButtonPropsByType = (theme: Theme, type: ButtonTypes) => getButtonProps(theme)[type];

export const getDefaultButtonProps = (theme: Theme) => getButtonPropsByType(theme, 'default');
