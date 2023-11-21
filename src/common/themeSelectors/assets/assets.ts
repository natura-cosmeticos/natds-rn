import { Brand, Neutral } from '@naturacosmeticos/natds-themes'
import { Theme, checkTheme } from '../theme/theme'

const getAssets = (theme: Theme) => checkTheme(theme).asset
const getBrandAssets = (theme: Theme) => getAssets(theme).brand

type BrandAssetsType = keyof Brand;
type NeutralBrandAssetsModel = keyof Neutral;

const getBrandAssetsByModel = (
  theme: Theme, type: BrandAssetsType, model: NeutralBrandAssetsModel
) => getBrandAssets(theme)[type][model]

export const getNeutralLogoA = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'neutral', 'a').es,
  file: getBrandAssetsByModel(theme, 'neutral', 'a').file,
  height: getBrandAssetsByModel(theme, 'neutral', 'a').height,
  pt: getBrandAssetsByModel(theme, 'neutral', 'a').pt,
  width: getBrandAssetsByModel(theme, 'neutral', 'a').width
})
export const getNeutralLogoB = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'neutral', 'b').es,
  file: getBrandAssetsByModel(theme, 'neutral', 'b').file,
  height: getBrandAssetsByModel(theme, 'neutral', 'b').height,
  pt: getBrandAssetsByModel(theme, 'neutral', 'b').pt,
  width: getBrandAssetsByModel(theme, 'neutral', 'b').width
})
export const getCustomLogoA = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'custom', 'a').es,
  file: getBrandAssetsByModel(theme, 'custom', 'a').file,
  height: getBrandAssetsByModel(theme, 'custom', 'a').height,
  pt: getBrandAssetsByModel(theme, 'custom', 'a').pt,
  width: getBrandAssetsByModel(theme, 'custom', 'a').width
})
export const getCustomLogoB = (theme: Theme) => ({
  es: getBrandAssetsByModel(theme, 'custom', 'b').es,
  file: getBrandAssetsByModel(theme, 'custom', 'b').file,
  height: getBrandAssetsByModel(theme, 'custom', 'b').height,
  pt: getBrandAssetsByModel(theme, 'custom', 'b').pt,
  width: getBrandAssetsByModel(theme, 'custom', 'b').width
})
