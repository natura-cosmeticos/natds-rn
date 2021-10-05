/* eslint-disable max-len */
import { Theme, Heading1, Display } from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getTypographyBody1 = (theme: Theme): Heading1 => checkTheme(theme).body1;
const getTypographyCaption = (theme: Theme): Heading1 => checkTheme(theme).caption;
const getTypographySubtitle2 = (theme: Theme): Heading1 => checkTheme(theme).subtitle2;
const getTypographyDisplay = (theme: Theme): Display => checkTheme(theme).typography.display;
const getTypographyHeadline = (theme: Theme): Display => checkTheme(theme).typography.display;
const getTypographyBodyRegular = (theme: Theme): Display => checkTheme(theme).typography.body.regular;
const getTypographyBodyBold = (theme: Theme): Display => checkTheme(theme).typography.body.bold;

const getDisplayStyles = (theme: Theme) => ({
  fontFamily: getTypographyDisplay(theme).fontFamily,
  fontWeight: getTypographyDisplay(theme).fontWeight,
});

const getHeadlineStyles = (theme: Theme) => ({
  fontFamily: getTypographyHeadline(theme).fontFamily,
  fontWeight: getTypographyHeadline(theme).fontWeight,
});

const getBodyRegularStyles = (theme: Theme) => ({
  fontFamily: getTypographyBodyRegular(theme).fontFamily,
  fontWeight: getTypographyBodyRegular(theme).fontWeight,
});

const getBodyBoldStyles = (theme: Theme) => ({
  fontFamily: getTypographyBodyBold(theme).fontFamily,
  fontWeight: getTypographyBodyBold(theme).fontWeight,
});

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
  bodyBold: getBodyBoldStyles(theme),
  bodyRegular: getBodyRegularStyles(theme),
  caption: getCaptionStyles(theme),
  display: getDisplayStyles(theme),
  headline: getHeadlineStyles(theme),
  subtitle2: getSubtitle2Styles(theme),
});
