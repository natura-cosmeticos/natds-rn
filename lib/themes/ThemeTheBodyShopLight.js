/* eslint-disable max-lines */
import { avatarSizes } from '../tokens/avatarSizes';
import { buttonSizes } from '../tokens/buttonSizes';
import { colors } from '../tokens/colors/theBodyShop';
import { elevation } from '../tokens/elevation';
import { fontSize } from '../tokens/fontSize';
import { iconSizes } from '../tokens/iconSizes';
import { radius } from '../tokens/radius';
import { sizes } from '../tokens/sizes';
import { spacing } from '../tokens/spacing';

export const ThemeTheBodyShopLight = {
  avatarSizes,
  buttonSizes,
  iconSizes,
  overrides: {
    MuiAvatar: {
      colorDefault: {
        color: colors.grayscale.colorBrdNatGray,
      },
    },
    MuiButton: {
      outlinedPrimary: {
        color: colors.grayscale.colorBrdNatGray,
      },
      outlinedSecondary: {
        color: colors.grayscale.colorBrdNatGray,
      },
      root: {
        fontSize: '0.875rem',
        minHeight: '40px',
        padding: '8px 16px',
      },
      sizeLarge: {
        fontSize: '0.875rem',
        minHeight: '48px',
      },
      sizeSmall: {
        fontSize: '0.875rem',
        minHeight: '32px',
      },
    },
    MuiIconButton: {
      root: {
        padding: '8px',
      },
      sizeSmall: {
        padding: '4px',
      },
    },
    MuiListItem: {
      button: {
        '&:hover': {
          backgroundColor: 'rgba(255, 107, 11, .08)',
        },
      },
      root: {
        '&$selected': {
          backgroundColor: 'rgba(255, 107, 11, .16)',
        },
        '&$selected:hover': {
          backgroundColor: 'rgba(255, 107, 11, .08)',
        },
      },
    },
    MuiTab: {
      root: {
        '&$disabled': {
          opacity: 0.24,
        },
      },
      textColorInherit: {
        '&$disabled': {
          opacity: 0.24,
        },
      },
      wrapper: {
        '& > *:first-child': {
          marginBottom: '2px !important',
        },
      },
    },
    MuiToolbar: {
      dense: {
        '@media (min-width: 600px)': {
          minHeight: '56px',
        },
        minHeight: '56px',
      },
      gutters: {
        '@media (min-width: 600px)': {
          padding: '0 16px',
        },
        padding: '0 16px',
      },
      regular: {
        '@media (min-width: 600px)': {
          minHeight: '56px',
        },
        minHeight: '56px',
      },
      root: {
        '@media (min-width: 600px)': {
          padding: '0 16px',
        },
        padding: '0 16px',
      },
    },
  },
  palette: {
    action: {
      disabled: 'rgba(0, 0, 0, .24)',
    },
    background: {
      default: '#FAFAFA',
      defaultContrastText: colors.grayscale.colorBrdNatGray,
      paper: colors.primary.colorBrdNatPrimaryWhite,
      paperContrastText: colors.grayscale.colorBrdNatGray,
    },
    complementary: {
      highlight: colors.grayscale.colorBrdBlack,
      link: colors.complementary.colorBrdNatCpBlue1,
      linkContrastText: colors.primary.colorBrdNatPrimaryWhite,
      warning: colors.complementary.colorBrdNatCpOrange4,
      warningContrastText: colors.grayscale.colorBrdBlack,
    },
    error: {
      contrastText: colors.primary.colorBrdNatPrimaryWhite,
      main: colors.complementary.colorBrdNatCpRed2,
    },
    grayscale: colors.grayscale,
    primary: {
      contrastText: colors.grayscale.colorBrdNatGray3,
      dark: '#EF8426',
      light: '#FEFDE8',
      main: colors.primary.colorBrdNatPrimaryYellow,
    },
    secondary: {
      contrastText: colors.grayscale.colorBrdBlack,
      dark: '#EF8426',
      light: '#FEFDE8',
      main: colors.primary.colorBrdNatPrimaryOrange,
    },
    success: {
      contrastText: colors.primary.colorBrdNatPrimaryWhite,
      main: colors.complementary.colorBrdNatCpGreen1,
    },
    text: {
      disabled: colors.grayscale.colorBrdNatGray2,
      hint: colors.grayscale.colorBrdNatGray2,
      primary: colors.grayscale.colorBrdNatGray,
      secondary: colors.grayscale.colorBrdNatGray1,
    },
  },
  shadows: elevation,
  shape: {
    badgeBorderRadius: 100,
    borderRadius: radius.medium,
  },
  sizes,
  spacing,
  typography: fontSize,
};
