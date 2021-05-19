import {
  Caption, Subtitle2, Theme,
} from '@naturacosmeticos/natds-themes/react-native';
import { TextStyle } from 'react-native';
import { checkTheme } from '../theme/theme';

const getTypographyCaption = (theme: Theme): Caption => checkTheme(theme).caption;
const getTypographySubtitle2 = (theme: Theme): Subtitle2 => checkTheme(theme).subtitle2;

type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

const getCaptionStyles = (theme: Theme): TextStyle => ({
  fontSize: getTypographyCaption(theme).fontSize,
  fontWeight: getTypographyCaption(theme).fontWeight.toString() as FontWeight,
  letterSpacing: getTypographyCaption(theme).letterSpacing,
});

const getSubtitle2Styles = (theme: Theme): TextStyle => ({
  fontSize: getTypographySubtitle2(theme).fontSize,
  fontWeight: getTypographySubtitle2(theme).fontWeight.toString() as FontWeight,
  letterSpacing: getTypographySubtitle2(theme).letterSpacing,
});

export const getTypographyStyles = (theme: Theme) => ({
  caption: getCaptionStyles(theme),
  subtitle2: getSubtitle2Styles(theme),
});
