import React, { ReactNode } from 'react';
import styled from 'styled-components/native';
import { NativeSyntheticEvent } from 'react-native';
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
import Modal from '../../common/Modal';

export interface DialogProps {
  /**
   * Controls the dialog visibility state
   */
  visible: boolean
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
   * The hardwareAccelerated prop controls whether to force hardware acceleration
   * for the underlying window.
   * Platform: `Android`
   */
  hardwareAccelerated?: boolean
  /**
   * The onShow prop allows passing a function that will be called once the modal has been shown.
   */
  onShow?: (event: NativeSyntheticEvent<any>) => void
  /**
   * The `onOrientationChange` callback is called when the orientation changes while the modal
   * is being displayed. The orientation provided is only 'portrait' or 'landscape'.
   * This callback is also called on initial render, regardless of the current orientation.
   * Platform: `iOS`
   */
  onOrientationChange?: (event: NativeSyntheticEvent<any>) => void;
  /**
   * The supportedOrientations prop allows the modal to be rotated to any of the specified
   * orientations. On iOS, the modal is still restricted by what's specified in your app's
   * Info.plist's UISupportedInterfaceOrientations field. When using presentationStyle of
   * pageSheet or formSheet, this property will be ignored by iOS.
   * Platform: `iOS`
   */
  supportedOrientations?: Array<
    'portrait' | 'portrait-upside-down' | 'landscape' | 'landscape-left' | 'landscape-right'
  >
  /**
   * The `onDismiss` prop allows passing a function that will be called once the modal has
   * been dismissed.
   * Platform: `iOS`
   */
  onDismiss?: () => void;
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
  hardwareAccelerated,
  onShow,
  supportedOrientations,
  onOrientationChange,
  onDismiss,
}: DialogProps) => (
    <Modal
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={onRequestClose}
      hardwareAccelerated={hardwareAccelerated}
      supportedOrientations={supportedOrientations}
      onShow={onShow}
      onOrientationChange={onOrientationChange}
      onDismiss={onDismiss}
    >
    <DialogWrapper>
      <DialogOverlay />
      <DialogContainer testID={testID}>
        {children}
      </DialogContainer>
    </DialogWrapper>
  </Modal>
);
