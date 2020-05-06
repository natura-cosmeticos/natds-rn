import { tokens as styleTokens } from '@naturacosmeticos/natds-styles';
import { IColorThemeTokens } from '@naturacosmeticos/natds-styles/dist/tokens/colors/themeBound/IColorThemeTokens';

type Tokens = typeof styleTokens;
type TokensWithoutColor = Omit<Tokens, 'colors'>
type TokensWithoutTokens = Omit<TokensWithoutColor, 'colorTokens'>
export type Theme = TokensWithoutTokens & { colorTokens: IColorThemeTokens }

type ThemeMode = 'dark' | 'light';

export const buildTheme = (tokens: Tokens, brand: string, mode: ThemeMode) => {
  const colorThemeName = `${brand}${mode === 'light' ? 'Light' : 'Dark'}ColorTokens`;
  const localTokens = { ...tokens };

  delete localTokens.colors;

  const theme: Theme = {
    ...localTokens,
    colorTokens: localTokens.colorTokens[colorThemeName],
  };

  return theme;
};

interface ThemeSelector {
  (theme: Theme): string | undefined
}

export const getTheme = (selector: ThemeSelector) => (
  { theme }: { theme: Theme },
) => selector(theme);
