import styled from 'styled-components/native';
import { getSpacingTiny, getSpacingSmall } from '../../../common/themeSelectors';
import { AlignmentOptions, DialogActionsProps } from './DialogFooter.props';

const buildDialogAlignment = (actionsAlignment: AlignmentOptions) => (actionsAlignment === 'side-by-side' ? 'row' : 'column');

export const DialogActions = styled.View<DialogActionsProps>(({ theme, actionsAlignment = 'side-by-side' }) => ({
  alignContent: 'stretch',
  flexDirection: buildDialogAlignment(actionsAlignment),
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  paddingHorizontal: getSpacingSmall(theme),
  paddingTop: getSpacingTiny(theme),
}));
