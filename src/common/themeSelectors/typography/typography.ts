import { Theme, Heading1 } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getTypographyBody1 = (theme: Theme): Heading1 => checkTheme(theme).body1;
const getTypographyCaption = (theme: Theme): Heading1 => checkTheme(theme).caption;
const getTypographySubtitle2 = (theme: Theme): Heading1 => checkTheme(theme).subtitle2;

const getBody1Styles = (theme: Theme) => ({
  fontSize: getTypographyBody1(theme).fontSize,
  fontWeight: getTypographyBody1(theme).fontWeight,
  letterSpacing: getTypographyBody1(theme).letterSpacing,
});

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
  body1: getBody1Styles(theme),
  caption: getCaptionStyles(theme),
  subtitle2: getSubtitle2Styles(theme),
});
