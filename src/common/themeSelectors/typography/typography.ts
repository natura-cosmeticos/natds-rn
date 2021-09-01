import {
  Caption, Subtitle2, Theme,
} from '@naturacosmeticos/natds-themes/react-native';
import { checkTheme } from '../theme/theme';

const getTypographyBody1 = (theme: Theme): Caption => checkTheme(theme).body1;
const getTypographyCaption = (theme: Theme): Caption => checkTheme(theme).caption;
const getTypographySubtitle2 = (theme: Theme): Subtitle2 => checkTheme(theme).subtitle2;

const getNewTypography = (theme: Theme) => checkTheme(theme).typography;
const getFontFamily = (theme: Theme) => getNewTypography(theme).fontFamily;
const getFontWeight = (theme: Theme) => getNewTypography(theme).fontWeight;

export const getFontFamilyPrimary = (theme: Theme) => getFontFamily(theme).primary;
export const getFontFamilySecondary = (theme: Theme) => getFontFamily(theme).secondary;
export const getFontFamilyBranding = (theme: Theme) => getFontFamily(theme).branding;
export const getFontFamilyCode = (theme: Theme) => getFontFamily(theme).code;
export const getFontFamilyDisplay = (theme: Theme) => getFontFamily(theme).display;
export const getFontFamilyHeadline = (theme: Theme) => getFontFamily(theme).headline;
export const getFontFamilyBody = (theme: Theme) => getFontFamily(theme).body;
export const getFontFamilyFallback = (theme: Theme) => getFontFamily(theme).fallback;

export const getFontWeightMedium = (theme: Theme) => getFontWeight(theme).medium;
export const getFontWeightRegular = (theme: Theme) => getFontWeight(theme).regular;

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
