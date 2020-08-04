import styled from 'styled-components/native';
import {
  getColorMediumEmphasis,
  getColorOnBackground,
  getColorPrimary,
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

interface TabWrapperProp {
  theme: Theme
}

const getTabButtonStyles = (theme: Theme, type: TabButtonTypes) => {
  const styles = {
    primary: {
      borderBottomColor: getColorPrimary(theme),
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

export const TabWrapper = styled.View<TabWrapperProp>(({ theme }) => ({
  backgroundColor: getColorSurface(theme),
  border: 'none',
  flexDirection: 'row',
  ...getShadowBySize(theme, '1'),
}));

export const TabButton = styled.TouchableOpacity<TabBase>(({ type, theme }) => ({
  alignItems: 'center',
  borderBottomWidth: 2,
  borderStyle: 'solid',
  flex: 1,
  justifyContent: 'center',
  padding: getSpacingSmall(theme),
  ...getTabButtonStyles(theme, type),
}));

export const TabText = styled.Text<TabBase>(({ type, theme }) => ({
  fontFamily: getFont('bold'),
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: 1.25,
  ...getTabTextStyles(theme, type),
}));
