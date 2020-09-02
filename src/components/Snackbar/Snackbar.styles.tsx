import styled from 'styled-components/native';
import { TextProps, NativeSyntheticEvent, TargetedEvent } from 'react-native';
import { SnackbarType } from './Snackbar';
import { Button, ButtonProps } from '../Button/Button';
import { Theme, getShadowBySize } from '../../common/themeSelectors';

const getBackgroundColorByType = (theme: Theme, type: SnackbarType) => {
  switch (type) {
    case 'info':
      return theme.colorTokens.colorLink;
    case 'warning':
      return theme.colorTokens.colorWarning;
    case 'error':
      return theme.colorTokens.colorAlert;
    case 'success':
      return theme.colorTokens.colorSuccess;
    default:
      return theme.colorTokens.colorOnSurface;
  }
};

const getColorByType = (theme: Theme, type: SnackbarType) => {
  switch (type) {
    case 'info':
      return theme.colorTokens.colorOnLink;
    case 'warning':
      return theme.colorTokens.colorOnWarning;
    case 'error':
      return theme.colorTokens.colorOnAlert;
    case 'success':
      return theme.colorTokens.colorOnSuccess;
    default:
      return theme.colorTokens.colorSurface;
  }
};

export const SnackbarButton = styled(Button)<ButtonProps>`
`;

interface SnackbarWrapperProps {
  theme: Theme;
  type: SnackbarType;
}

export const SnackbarWrapper = styled.View<SnackbarWrapperProps>(({ theme, type }) => ({
  alignItems: 'center',
  backgroundColor: getBackgroundColorByType(theme, type),
  borderRadius: theme.radius.medium,
  flexDirection: 'row',
  flexWrap: 'wrap',
  fontSize: theme.fontSize.body2,
  justifyContent: 'flex-end',
  marginBottom: theme.spacing.spacingSmall,
  marginLeft: theme.spacing.spacingSmall,
  marginRight: theme.spacing.spacingSmall,
  ...getShadowBySize(theme, '5'),
}));

// begin - onTextLayout missing typings @0.62.2
// TODO: remove this block when upgrading @types/react-native
interface TextLayoutLine {
  ascender: number;
  capHeight: number;
  descender: number;
  height: number;
  text: string;
  width: number;
  x: number;
  xHeight: number;
  y: number;
}

interface TextLayoutEventData extends TargetedEvent {
  lines: TextLayoutLine[];
}
// end - onTextLayout missing typings @0.62.2

interface SnackbarTextProps extends TextProps {
  /**
   * Invoked on Text layout
   */
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
  type: SnackbarType;
  isTwoLineAction?: boolean;
}

export const SnackbarText = styled.Text<SnackbarTextProps>`
  color: ${({ theme, type }) => getColorByType(theme, type)};
  flexGrow: 1;
  paddingBottom: ${({ isTwoLineAction }) => (isTwoLineAction ? 8 : 14)}px;
  paddingLeft: 16px;
  paddingRight: 16px;
  paddingTop: 14px;
`;
