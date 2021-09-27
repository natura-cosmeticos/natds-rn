import React, { ReactNode } from 'react';
import { NativeSyntheticEvent } from 'react-native';
import Modal from '../../common/Modal';
import {
  DialogWrapper, DialogOverlay, DialogContainer,
} from './Dialog.styles';

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

export const Dialog = ({
  testID = 'ds-dialog',
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
