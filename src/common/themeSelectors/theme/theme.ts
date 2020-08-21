/* eslint-disable max-lines */

import { tokens } from '@naturacosmeticos/natds-styles';
import { IColorThemeTokens } from '@naturacosmeticos/natds-styles/dist/tokens/colors/themeBound/IColorThemeTokens';
import { IElevation } from '@naturacosmeticos/natds-styles/dist/tokens/elevation/IElevation';

type Tokens = typeof tokens;
type TokensWithoutColor = Omit<Tokens, 'colors'>
type TokensWithoutColorTokens = Omit<TokensWithoutColor, 'colorTokens'>
type TokensWithoutElevation = Omit<TokensWithoutColorTokens, 'elevation'>

interface ElevationProps {
  elevation: number
  shadowColor: string
  shadowOffset: { height: number, width: number }
  shadowOpacity: number
  shadowRadius: number
}

type Elevation = Record<keyof IElevation, ElevationProps>


export type Theme = TokensWithoutElevation
  & {
    colorTokens: IColorThemeTokens,
    elevation: Elevation | {}
  }

type ThemeMode = 'dark' | 'light';

const elevation = {
  1: {
    elevation: 1,
    shadowColor: '#000000',
    shadowOffset: { height: 1, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 1,
  },
  2: {
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 2,
  },
  3: {
    elevation: 3,
    shadowColor: '#000000',
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 4,
  },
  4: {
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 5,
  },
  5: {
    elevation: 5,
    shadowColor: '#000000',
    shadowOffset: { height: 6, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
  },
  6: {
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 10,
  },
  7: {
    elevation: 7,
    shadowColor: '#000000',
    shadowOffset: { height: 9, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 12,
  },
  8: {
    elevation: 8,
    shadowColor: '#000000',
    shadowOffset: { height: 12, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 17,
  },
  9: {
    elevation: 9,
    shadowColor: '#000000',
    shadowOffset: { height: 16, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 24,
  },
  10: {
    elevation: 10,
    shadowColor: '#000000',
    shadowOffset: { height: 24, width: 0 },
    shadowOpacity: 0.14,
    shadowRadius: 38,
  },
};

export const buildTheme = (brand: string, mode: ThemeMode) => {
  if (!brand || !mode) throw new Error('No brand or mode found. To build a theme, you have to provide this.');
  if (!tokens) throw new Error('Unable to load tokens dependency. Check the instalation logs for errors');

  const colorThemeName = `${brand}${mode === 'light' ? 'Light' : 'Dark'}ColorTokens`;
  const localTokens = { ...tokens };

  delete localTokens.colors;

  const theme: Theme = {
    ...localTokens,
    colorTokens: localTokens.colorTokens[colorThemeName],
    elevation,
  };

  return theme;
};

interface ThemeSelector {
  (theme: Theme): string | undefined
}

export const getTheme = (selector: ThemeSelector) => (
  { theme }: { theme: Theme },
) => selector(theme);

export const checkTheme = (theme: Theme) => {
  if (!theme) throw new Error('Can not find theme. Check your ThemeProvider setup');

  return theme;
};
