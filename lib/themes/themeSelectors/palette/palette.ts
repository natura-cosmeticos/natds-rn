// Helper selectors
const getPalette = theme => theme.palette;

export const getTheme = selector => ({ theme }) => selector(theme);


// Success selectors
const getSuccess = theme => getPalette(theme).success;

export const getSuccessMain = theme => getSuccess(theme).main;
export const getSuccessContrastText = theme => getSuccess(theme).contrastText;


// Action selectors
const getAction = theme => getPalette(theme).action;

export const getActionDisabled = theme => getAction(theme).disabled;


// Background selectors
const getBackground = theme => getPalette(theme).background;

export const getBackgroundPaper = theme => getBackground(theme).paper;
export const getBackgroundDefault = theme => getBackground(theme).default;


// Primary selectors
const getPrimary = theme => getPalette(theme).primary;

export const getPrimaryMain = theme => getPrimary(theme).main;


// Tezt selectors
const getText = theme => getPalette(theme).text;

export const getTextPrimary = theme => getText(theme).primary;
