import { Theme, checkTheme } from '..';

interface FontSizeProps {
  fontSize: string;
  fontWeight: number;
}

const getFontSize = (theme: Theme) => checkTheme(theme).fontSize;

export type Size = 'h1'
                  | 'h2'
                  | 'h3'
                  | 'h4'
                  | 'h5'
                  | 'h6'
                  | 'subtitle1'
                  | 'subtitle2'
                  | 'body1'
                  | 'body2'
                  | 'button'
                  | 'caption'
                  | 'overline'

export const getFontSizeProps = (
  theme: Theme, size: Size,
): FontSizeProps => getFontSize(theme)[size];
