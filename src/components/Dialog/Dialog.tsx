import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { Modal } from 'react-native';
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

export interface DialogProps {
  /**
   * The dialog content
   */
  children: ReactNode
  /**
   * The `onRequestClose` prop allows passing a function that will be called
   *  once the modal has been dismissed.
   * _On the Android platform, this is a required function._
   */
  onRequestClose?: () => void;
  /**
   * Controls the dialog visibility state
   */
  visible: boolean
  /**
   * Optional ID for testing
   */
  testID?: string,
}

const DialogOverlay = styled.View(({ theme }) => ({
  background: getColorHighlight(theme),
  bottom: 0,
  flex: 1,
  left: 0,
  opacity: getOpacity56(theme),
  position: 'absolute',
  right: 0,
  top: 0,
}));

const DialogWrapper = styled.View(({ theme }) => ({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
  paddingLeft: getSpacingSmall(theme),
  paddingRight: getSpacingSmall(theme),
}));

const DialogContainer = styled.View(({ theme }) => ({
  backgroundColor: getColorSurface(theme),
  borderRadius: getRadiusBySize(theme, 'medium'),
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

export const DialogActions = styled.View(({ theme }) => ({
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  paddingHorizontal: getSpacingSmall(theme),
  paddingTop: getSpacingTiny(theme),
}));

export const Dialog = ({
  testID = 'dialog',
  children,
  visible,
  onRequestClose,
}: DialogProps) => (
  <Modal
    animationType={'fade'}
    visible={visible}
    transparent
    onRequestClose={onRequestClose}
  >
    <DialogWrapper>
      <DialogOverlay />
      <DialogContainer testID={testID}>
        {children}
      </DialogContainer>
    </DialogWrapper>
  </Modal>
);
