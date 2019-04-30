import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalView,
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
  <ModalView>
    <ModalTitle>{title}</ModalTitle>
    <ModalText>{text}</ModalText>
    <ModalButton onPress={closeAction}>
      <ModalButtonLabel>{buttonText.toUpperCase()}</ModalButtonLabel>
    </ModalButton>
  </ModalView>
);

NatModal.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  closeAction: PropTypes.func.isRequired,
};
