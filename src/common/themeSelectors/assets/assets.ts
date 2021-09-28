import { Brand, Neutral } from '@naturacosmeticos/natds-themes';
import { Theme, checkTheme } from '../theme/theme';

const getAssets = (theme: Theme) => checkTheme(theme).asset;
const getBrandAssets = (theme: Theme) => getAssets(theme).brand;

type BrandAssetsType = keyof Brand;
type NeutralBrandAssetsModel = keyof Neutral;

const getBrandAssetsByModel = (
  theme: Theme, type: BrandAssetsType, model: NeutralBrandAssetsModel,
) => getBrandAssets(theme)[type][model];

export const getNeutralLogoA = (theme: Theme) => ({
  file: getBrandAssetsByModel(theme, 'neutral', 'a').file,
  height: getBrandAssetsByModel(theme, 'neutral', 'a').height,
  width: getBrandAssetsByModel(theme, 'neutral', 'a').width,
});
export const getNeutralLogoB = (theme: Theme) => ({
  file: getBrandAssetsByModel(theme, 'neutral', 'b').file,
  height: getBrandAssetsByModel(theme, 'neutral', 'b').height,
  width: getBrandAssetsByModel(theme, 'neutral', 'b').width,
});
export const getCustomLogoA = (theme: Theme) => ({
  file: getBrandAssetsByModel(theme, 'custom', 'a').file,
  height: getBrandAssetsByModel(theme, 'custom', 'a').height,
  width: getBrandAssetsByModel(theme, 'custom', 'a').width,
});
export const getCustomLogoB = (theme: Theme) => ({
  file: getBrandAssetsByModel(theme, 'custom', 'b').file,
  height: getBrandAssetsByModel(theme, 'custom', 'b').height,
  width: getBrandAssetsByModel(theme, 'custom', 'b').width,
});
