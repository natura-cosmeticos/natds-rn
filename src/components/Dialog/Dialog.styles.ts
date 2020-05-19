import styled from 'styled-components/native';
import {
  getColorHighEmphasis,
  getColorSurface,
  getColorHighlight,
  getOpacity56,
  getRadiusBySize,
  getSpacingSmall,
  getFont,
  getSpacingTiny,
} from '../../common/themeSelectors';

export const DialogOverlay = styled.View(({ theme }) => ({
  background: getColorHighlight(theme),
  bottom: 0,
  flex: 1,
  left: 0,
  opacity: getOpacity56(theme),
  position: 'absolute',
  right: 0,
  top: 0,
}));

export const DialogWrapper = styled.View(({ theme }) => ({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  paddingLeft: getSpacingSmall(theme),
  paddingRight: getSpacingSmall(theme),
}));

export const DialogContainer = styled.View(({ theme }) => ({
  backgroundColor: getColorSurface(theme),
  borderRadius: getRadiusBySize(theme, 'medium'),
  maxWidth: '328px',
  paddingVertical: getSpacingSmall(theme),
  width: '100%',
}));

export const DialogTitle = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  fontFamily: getFont('bold'),
  fontSize: 20,
  fontWeight: 600,
  marginBottom: getSpacingTiny(theme),
  marginHorizontal: getSpacingSmall(theme),
}));

export const DialogContentText = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  fontFamily: getFont('regular'),
  fontSize: 14,
  fontWeight: 400,
}));

export const DialogContent = styled.View(({ theme }) => ({
  paddingHorizontal: getSpacingSmall(theme),
}));

export type AlignmentOptions = 'side-by-side' | 'stacked';
export interface DialogActionsProps {
  actionsAlignment?: AlignmentOptions
}

const buildDialogAlignment = (actionsAlignment: AlignmentOptions) => (actionsAlignment === 'side-by-side' ? 'row' : 'column');

export const DialogActions = styled.View<DialogActionsProps>(({ theme, actionsAlignment = 'side-by-side' }) => ({
  alignContent: 'stretch',
  flexDirection: buildDialogAlignment(actionsAlignment),
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  paddingHorizontal: getSpacingSmall(theme),
  paddingTop: getSpacingTiny(theme),
}));
