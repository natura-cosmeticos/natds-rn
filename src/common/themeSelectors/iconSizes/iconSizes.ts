import { Theme, checkTheme } from '..';

const getIconSizes = (theme: Theme) => checkTheme(theme).iconSizes;

export type Size = 'micro'
                  | 'tiny'
                  | 'small'
                  | 'standard'
                  | 'medium'
                  | 'large'
                  | 'largex'
                  | 'largexx'
                  | 'huge'
                  | 'hugex'
                  | 'hugexx'

export const getIconSizesProps = (theme: Theme, size: Size) => getIconSizes(theme)[size];
