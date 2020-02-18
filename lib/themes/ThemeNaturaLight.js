import { colors } from '../tokens/colors/natura';
import { fontSize } from '../tokens/fontSize';
import { radius } from '../tokens/radius';
import { spacing } from '../tokens/spacing';
import { avatarSizes } from '../tokens/avatarSizes';
import { buttonSizes } from '../tokens/buttonSizes';
import { elevation } from '../tokens/elevation';
import { iconSizes } from '../tokens/iconSizes';
import { sizes } from '../tokens/sizes';

export const ThemeNaturaLight = {
  shape: {
    borderRadius: radius.medium,
    badgeBorderRadius: 100,
  },
  avatarSizes,
  buttonSizes,
  iconSizes,
  sizes,
  spacing,
  palette: {
    action: {
      disabled: 'rgba(0, 0, 0, .24)',
    },
    primary: {
      main: colors.primary.colorBrdNatPrimaryYellow,
      light: '#FEFDE8',
      dark: '#EF8426',
      contrastText: colors.grayscale.colorBrdNatGray,
    },
    secondary: {
      main: colors.primary.colorBrdNatPrimaryOrange,
      light: '#FEFDE8',
      dark: '#EF8426',
      contrastText: colors.grayscale.colorBrdBlack,
    },
    error: {
      main: colors.complementary.colorBrdNatCpRed2,
      contrastText: colors.primary.colorBrdNatPrimaryWhite,
    },
    success: {
      main: colors.complementary.colorBrdNatCpGreen1,
      contrastText: colors.primary.colorBrdNatPrimaryWhite,
    },
    background: {
      paper: colors.primary.colorBrdNatPrimaryWhite,
      default: '#FAFAFA',
      paperContrastText: colors.grayscale.colorBrdNatGray,
      defaultContrastText: colors.grayscale.colorBrdNatGray,
    },
    text: {
      primary: colors.grayscale.colorBrdNatGray,
      secondary: colors.grayscale.colorBrdNatGray1,
      disabled: colors.grayscale.colorBrdNatGray2,
      hint: colors.grayscale.colorBrdNatGray2,
    },
    complementary: {
      highlight: colors.grayscale.colorBrdBlack,
      link: colors.complementary.colorBrdNatCpBlue1,
      linkContrastText: colors.primary.colorBrdNatPrimaryWhite,
      warning: colors.complementary.colorBrdNatCpOrange4,
      warningContrastText: colors.grayscale.colorBrdBlack,
    },
  },
  typography: fontSize,
  shadows: elevation,
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        color: colors.grayscale.colorBrdNatGray,
      },
      outlinedSecondary: {
        color: colors.grayscale.colorBrdNatGray,
      },
      sizeSmall: {
        fontSize: '0.875rem',
        minHeight: '32px',
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
    },
    MuiAvatar: {
      colorDefault: {
        color: colors.grayscale.colorBrdNatGray,
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
    MuiToolbar: {
      root: {
        padding: '0 16px',
        '@media (min-width: 600px)': {
          padding: '0 16px',
        },
      },
      gutters: {
        padding: '0 16px',
        '@media (min-width: 600px)': {
          padding: '0 16px',
        },
      },
      regular: {
        minHeight: '56px',
        '@media (min-width: 600px)': {
          minHeight: '56px',
        },
      },
      dense: {
        minHeight: '56px',
        '@media (min-width: 600px)': {
          minHeight: '56px',
        },
      },
    },
    MuiListItem: {
      root: {
        '&$selected': {
          backgroundColor: 'rgba(255, 107, 11, .16)',
        },
        '&$selected:hover': {
          backgroundColor: 'rgba(255, 107, 11, .08)',
        },
      },
      button: {
        '&:hover': {
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
  },
};
