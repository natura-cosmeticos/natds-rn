import styled from 'styled-components/native';
import { TextProps, NativeSyntheticEvent, TargetedEvent } from 'react-native';
import { SnackbarType } from './Snackbar';
import { Theme, getSpacingSmall, getRadiusBySize } from '../../common/themeSelectors';

const getBackgroundColorByType = (theme: Theme, type: SnackbarType) => {
  switch (type) {
    case 'info':
      return theme.color.link;
    case 'warning':
      return theme.color.warning;
    case 'error':
      return theme.color.alert;
    case 'success':
      return theme.color.success;
    default:
      return theme.color.onSurface;
  }
};

export const getColorByType = (theme: Theme, type: SnackbarType) => {
  switch (type) {
    case 'info':
      return theme.color.onLink;
    case 'warning':
      return theme.color.onWarning;
    case 'error':
      return theme.color.onAlert;
    case 'success':
      return theme.color.onSuccess;
    default:
      return theme.color.surface;
  }
};


interface SnackbarButtonWrapperProps { isTwoLineAction?: boolean; }

export const SnackbarButtonWrapper = styled.View<SnackbarButtonWrapperProps>`
  margin-top: ${({ isTwoLineAction }) => (isTwoLineAction ? '0px' : '4px')};
  margin-bottom: 4px;
  margin-right: 4px;
  margin-left: 4px;
`;

interface SnackbarWrapperProps {
  theme: Theme;
  type: SnackbarType;
}

export const SnackbarWrapper = styled.View<SnackbarWrapperProps>(({ theme, type }) => ({
  alignItems: 'center',
  backgroundColor: getBackgroundColorByType(theme, type),
  borderRadius: getRadiusBySize(theme, 'medium'),
  bottom: 0,
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  left: 0,
  marginBottom: getSpacingSmall(theme),
  marginLeft: getSpacingSmall(theme),
  marginRight: getSpacingSmall(theme),
  position: 'absolute',
  right: 0,
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
  flex-grow: 1;
  padding-bottom: ${({ isTwoLineAction }) => (isTwoLineAction ? 8 : 16)}px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
  font-size: 14px;
`;
