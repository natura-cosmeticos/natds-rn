import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import {
  getColorMediumEmphasis,
  getColorOnBackground,
  getColorPrimary,
  getColorSurface,
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
  theme: Theme,
  children: ReactNode,
  testID?: string;
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

const TabWrapperComponent = styled.View<TabWrapperProp>(({ theme }) => ({
  backgroundColor: getColorSurface(theme),
  border: 'none',
  flexDirection: 'row',
}));

export const TabWrapper = (props: TabWrapperProp) => <TabWrapperComponent {...props} style={getShadowBySize(props.theme, '1')}>
  {props.children}
</TabWrapperComponent>;

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
  fontSize: 14,
  letterSpacing: 1.25,
  ...getTabTextStyles(theme, type),
}));
