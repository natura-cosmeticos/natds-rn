import { ITheme } from '@naturacosmeticos/natds-styles';

interface ThemeSelector {
  (theme: ITheme): string
}

// Helper selectors
const getPalette = (theme: ITheme) => theme.palette;

export const getTheme = (selector: ThemeSelector) => (
  { theme }: { theme: ITheme },
) => selector(theme);


// Success selectors
const getSuccess = (theme: ITheme) => getPalette(theme)?.success;

export const getSuccessMain = (theme: ITheme) => getSuccess(theme)?.main;
export const getSuccessContrastText = (theme: ITheme) => getSuccess(theme)?.contrastText;


// Action selectors
const getAction = (theme: ITheme) => getPalette(theme)?.action;

export const getActionDisabled = (theme: ITheme) => getAction(theme)?.disabled;


// Background selectors
const getBackground = (theme: ITheme) => getPalette(theme)?.background;

export const getBackgroundPaper = (theme: ITheme) => getBackground(theme)?.paper;
export const getBackgroundDefault = (theme: ITheme) => getBackground(theme)?.default;


// Primary selectors
const getPrimary = (theme: ITheme) => getPalette(theme)?.primary;

export const getPrimaryMain = (theme: ITheme) => getPrimary(theme)?.main;


// Text selectors
const getText = (theme: ITheme) => getPalette(theme)?.text;

export const getTextPrimary = (theme: ITheme) => getText(theme)?.primary;
