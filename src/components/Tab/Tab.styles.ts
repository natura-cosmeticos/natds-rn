import styled from 'styled-components/native';
import {
  getColorMediumEmphasis,
  getColorOnBackground,
  getColorSecondary,
  getColorSurface,
  getFont,
  getSpacingSmall,
  getShadowBySize,
  Theme,
} from '../../common/themeSelectors';

export type TabButtonTypes = 'primary' | 'secondary';

interface TabBase {
  type: TabButtonTypes
  theme: Theme
}

const getTabButtonStyles = (theme: Theme, type: TabButtonTypes) => {
  const styles = {
    primary: {
      borderBottomColor: getColorSecondary(theme),
    },
    secondary: {
      borderColor: 'transparent',
    },
  };

  return styles[type];
};

const getTabTextStyles = (theme: Theme, type: TabButtonTypes) => {
  const styles = {
    primary: {
      color: getColorOnBackground(theme),
    },
    secondary: {
      color: getColorMediumEmphasis(theme),
    },
  };

  return styles[type];
};

export const TabWrapper = styled.View(({ theme }) => ({
  border: 'none',
  flexDirection: 'row',
  ...getShadowBySize(theme, '6'),
}));

export const TabButton = styled.TouchableOpacity<TabBase>(({ type, theme }) => ({
  alignItems: 'center',
  backgroundColor: getColorSurface(theme),
  border: 'transparent',
  borderStyle: 'solid',
  borderWidth: 2,
  flex: 1,
  padding: getSpacingSmall(theme),
  ...getTabButtonStyles(theme, type),
}));

export const TabText = styled.Text<TabBase>(({ type, theme }) => ({
  fontFamily: getFont('bold'),
  fontSize: 14,
  letterSpacing: 1.25,
  ...getTabTextStyles(theme, type),
}));
