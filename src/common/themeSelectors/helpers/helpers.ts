import { Theme, ThemeSelector } from '../theme/theme';

export const buildColorWithOpacity = (
  colorSelector: ThemeSelector,
  opacitySelector: ThemeSelector,
  theme: Theme,
) => {
  const colorHex = colorSelector(theme);
  const opacityScaleOne = opacitySelector(theme);
  const opacityScaleHundred = opacityScaleOne && typeof opacityScaleOne === 'number'
    ? opacityScaleOne * 100
    : '';

  return `${colorHex}${opacityScaleHundred}`;
};
