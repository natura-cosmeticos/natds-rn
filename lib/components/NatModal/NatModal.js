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
  ModalContainer,
  ModalButtonAlternative,
  ModalButtonLabelAlternative,
} from './NatModal.styles';

export const NatModal = ({
  title,
  text,
  action,
  buttonText,
  alternative,
  buttonTextAlternative,
  alternativeAction,
  save,
}) => (
  <Modal
    animationType="fade"
    transparent
    onRequestClose={action}
    save={save}
  >
    <ModalView>
      <ModalContent accessibilityLabel={title}>
        <ModalTitle save={save}>{title}</ModalTitle>
        { !save && (<ModalText>{text}</ModalText>) }
        {
            alternative
              ? (
                <ModalContainer>
                  <ModalButtonAlternative
                    alternative={alternative}
                    onPress={alternativeAction}
                    accessibilityLabel={buttonTextAlternative.toUpperCase()}
                  >
                    <ModalButtonLabelAlternative
                      alternative={alternative}
                    >
                      {buttonTextAlternative.toUpperCase()}
                    </ModalButtonLabelAlternative>
                  </ModalButtonAlternative>

                  <ModalButton
                    alternative={alternative}
                    onPress={action}
                    accessibilityLabel={buttonText.toUpperCase()}
                  >
                    <ModalButtonLabel>{buttonText.toUpperCase()}</ModalButtonLabel>
                  </ModalButton>
                </ModalContainer>
              )
              : (
                <ModalButton
                  alternative={alternative}
                  onPress={action}
                  accessibilityLabel={buttonText.toUpperCase()}
                >
                  <ModalButtonLabel>{buttonText.toUpperCase()}</ModalButtonLabel>
                </ModalButton>
              )
          }
      </ModalContent>
    </ModalView>
  </Modal>
);

NatModal.propTypes = {
  action: PropTypes.func.isRequired,
  alternative: PropTypes.bool,
  alternativeAction: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  buttonTextAlternative: PropTypes.string,
  save: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string.isRequired,
};

NatModal.defaultProps = {
  alternative: false,
  alternativeAction: PropTypes.func,
  buttonTextAlternative: 'Button text error',
  save: false,
  text: 'Modal text error',
};
