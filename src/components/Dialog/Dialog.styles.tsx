import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import {
  getColorHighEmphasis,
  getColorSurface,
  getColorHighlight,
  getOpacity56,
  getRadiusBySize,
  getSpacingSmall,
  getSpacingTiny,
} from '../../common/themeSelectors';
import { Divider } from '..';

const { height } = Dimensions.get('window');

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
  maxHeight: height * 0.7,
  paddingVertical: getSpacingSmall(theme),
  width: '100%',
}));

const DialogTitleComponent = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  flex: 0.85,
  fontSize: 20,
}));

export const DialogTitle = props => (
  <DialogTitleComponent {...props} style={{ fontWeight: 'bold' }} />
);

export const DialogContentText = styled.Text(({ theme }) => ({
  color: getColorHighEmphasis(theme),
  fontSize: 14,
  fontWeight: 400,
  paddingHorizontal: getSpacingSmall(theme),
  paddingVertical: getSpacingSmall(theme),
}));

export interface DialogContentProps {
  children?: ReactNode
  divider?: boolean
}

const DialogContentComponent = styled.ScrollView<DialogContentProps>(({ theme }) => ({
  flexShrink: 1,
}));

export const DialogContent = ({ children, divider = false }) => (
  <DialogContentComponent bounces={false} >
    {divider && <Divider/>}
      {children}
    {divider && <Divider/>}
  </DialogContentComponent>
);

export type AlignmentOptions = 'side-by-side' | 'stacked';
export interface DialogActionsProps {
  /**
   * @deprecated `actionsAlignment` prop since 7.4.0
   */
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
