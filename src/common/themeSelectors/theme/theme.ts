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

const parseElevation = (elevation: string) => {
  const regEx = /(\d+(\.\d+)?)/g;
  const matches = elevation.match(regEx);

  if (matches) {
    const [width, height, blurRadius, , r, g, b, alpha] = matches;

    const toUnit = (prop: string) => parseInt(prop, 0);

    return {
      elevation: 2,
      shadowColor: `rgb(${r}, ${g}, ${b})`,
      shadowOffset: { height: toUnit(height), width: toUnit(width) },
      shadowOpacity: parseFloat(alpha),
      shadowRadius: toUnit(blurRadius),
    };
  }

  return {};
};

const buidElevation = (elevation: IElevation) => {
  const nativeElevation = {};

  Object
    .keys(elevation)
    .forEach((key) => { nativeElevation[key] = parseElevation(elevation[key]); });

  return nativeElevation;
};

export const buildTheme = (brand: string, mode: ThemeMode) => {
  if (!brand || !mode) throw new Error('No brand or mode found. To build a theme, you have to provide this.')
  if (!tokens) throw new Error('Unable to load tokens dependency. Check the instalation logs for errors')

  const colorThemeName = `${brand}${mode === 'light' ? 'Light' : 'Dark'}ColorTokens`;
  const localTokens = { ...tokens };

  delete localTokens.colors;

  const theme: Theme = {
    ...localTokens,
    colorTokens: localTokens.colorTokens[colorThemeName],
    elevation: buidElevation(localTokens.elevation),
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
}
