import {
  Caption, Subtitle2, Theme,
} from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getTypographyCaption = (theme: Theme): Caption => checkTheme(theme).caption;
const getTypographySubtitle2 = (theme: Theme): Subtitle2 => checkTheme(theme).subtitle2;

const getCaptionStyles = (theme: Theme) => ({
  fontSize: getTypographyCaption(theme).fontSize,
  fontWeight: getTypographyCaption(theme).fontWeight,
  letterSpacing: getTypographyCaption(theme).letterSpacing,
});

const getSubtitle2Styles = (theme: Theme) => ({
  fontSize: getTypographySubtitle2(theme).fontSize,
  fontWeight: getTypographySubtitle2(theme).fontWeight,
  letterSpacing: getTypographySubtitle2(theme).letterSpacing,
});

export const getTypographyStyles = (theme: Theme) => ({
  caption: getCaptionStyles(theme),
  subtitle2: getSubtitle2Styles(theme),
});
