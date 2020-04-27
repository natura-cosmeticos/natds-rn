export const TITLE = 'Theme';
export const PARAM_KEY = 'theme';
export const ADDON_ID = 'natds/theme';
export const PANEL_ID = `${ADDON_ID}/panel`;
export const CHANGE = `${ADDON_ID}/change`;


export const getStoryBookTheme = () => {
  const store = localStorage.getItem('@storybook/ui/store');
  const initialTheme = store && JSON.parse(store);
  const { theme } = initialTheme;
  return theme.base;
}
