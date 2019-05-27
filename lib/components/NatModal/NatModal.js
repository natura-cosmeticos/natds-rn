import React from 'react';
import { Modal } from 'react-native';
import PropTypes from 'prop-types';

import {
  ModalView,
  ModalContent,
  ModalText,
  ModalTitle,
  ModalButton,
  ModalButtonLabel,
} from './NatModal.styles';

export const NatModal = ({
  title,
  text,
  buttonText,
  closeAction,
}) => (
  <Modal
    animationType="fade"
    transparent
    onRequestClose={closeAction}
  >
    <ModalView>
      <ModalContent accessibilityLabel={title}>
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{text}</ModalText>
        <ModalButton
          onPress={closeAction}
          accessibilityLabel={buttonText}
        >
          <ModalButtonLabel>{buttonText.toUpperCase()}</ModalButtonLabel>
        </ModalButton>
      </ModalContent>
    </ModalView>
  </Modal>
);

NatModal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
};
