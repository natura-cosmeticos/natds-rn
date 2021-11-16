/* eslint-disable max-lines */
import styled from 'styled-components/native';
import { AccessibilityState } from 'react-native';

import {
  getColorMediumEmphasis,
  getColorLowEmphasis,
  getColorOnBackground,
  getColorPrimary,
  getColorSurface,
  getSpacingSmall,
  getSizeLargeX,
  getSizeMedium,
  getShadowBySize,
  Theme,
} from '../../common/themeSelectors';
import {
  TabButtonTypes, TabProps, IconPositions,
} from './Tab.types';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';

interface TabBase {
  type: TabButtonTypes
  theme: Theme
  accessibilityLabel?: string
  accessibilityHint?: string
  accessibilityState?: AccessibilityState
  accessible?: boolean
}

interface TextBase extends TabBase {
  iconPosition?: IconPositions
  disabled?: boolean
}

interface DisplayText {
  theme: Theme
  iconPosition?: IconPositions
}

interface TabWrapperProp {
  theme: Theme
  elevation?: boolean
  backgroundColor?: boolean
  iconPosition?: IconPositions
}

interface ButtonContentProps extends TabProps {
  theme: Theme,
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

export const getTabTextStyles = (theme: Theme, type: TabButtonTypes) => {
  const styles = {
    primary: getColorOnBackground(theme),
    secondary: getColorMediumEmphasis(theme),
  };

  return styles[type];
};

export const getDisplayTextStyles = ({ theme, iconPosition }: DisplayText) => {
  if (iconPosition) {
    const styles = {
      icon: {
        display: 'none',
      },
      leading: {
        paddingLeft: theme.spacing.micro,
      },
      top: {
        paddingTop: theme.spacing.micro,
      },
    };

    return styles[iconPosition];
  }

  return {};
};

export const getTabTextColor = ({ disabled, theme, type }: TextBase) => {
  if (disabled) {
    return { color: getColorLowEmphasis(theme) };
  }

  return { color: getTabTextStyles(theme, type) };
};

export const getTabWrapperElevation = ({ elevation, theme }: TabWrapperProp) => (
  elevation && getShadowBySize(theme, 'micro')
);

export const TabWrapper = styled.View.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})<TabWrapperProp>(({
  theme, backgroundColor, iconPosition,
}) => ({
  backgroundColor: backgroundColor ? getColorSurface(theme) : 'transparent',
  border: 'none',
  flexDirection: 'row',
  height: iconPosition === 'icon' ? getSizeMedium(theme) : getSizeLargeX(theme),
}));


export const TabButton = styled(TouchableRipple)<TabBase>(({ type, theme }) => ({
  ...getTabButtonStyles(theme, type),
  alignItems: 'center',
  borderBottomWidth: 2,
  borderStyle: 'solid',
  flex: 1,
  justifyContent: 'center',
  minWidth: getSizeLargeX(theme),
  paddingHorizontal: getSpacingSmall(theme),
}));

export const TabText = styled.Text<TextBase>(({
  type, theme, iconPosition, disabled = false,
}) => ({
  ...getDisplayTextStyles({ iconPosition, theme }),
  ...getTabTextColor({ disabled, theme, type }),
  fontFamily: theme.tab.label.primary.fontFamily,
  fontSize: theme.tab.label.fontSize,
  fontWeight: theme.tab.label.primary.fontWeight,
  letterSpacing: theme.tab.label.letterSpacing,
  lineHeight: theme.tab.label.fontSize * theme.tab.label.lineHeight,
}));

export const TabButtonContent = styled.View<Pick<ButtonContentProps, 'iconPosition'>>(({ iconPosition }) => ({
  alignItems: 'center',
  flexDirection: iconPosition === 'leading' ? 'row' : 'column',
}));
