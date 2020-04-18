import React from "react";
import { Modal } from "react-native";
import {
  ModalView,
  ModalContent,
  ModalText,
  ModalTitle,
  ModalButton,
  ModalButtonLabel,
  ModalContainer,
  ModalButtonAlternative,
  ModalButtonLabelAlternative
} from "./NatModal.styles";
type NatModalProps = {
  action: (...args: any[]) => any,
  alternative?: boolean,
  alternativeAction?: (...args: any[]) => any,
  buttonText: string,
  buttonTextAlternative?: string,
  save?: boolean,
  text?: string,
  title: string
};
export const NatModal: React.SFC<NatModalProps> = ({
  title,
  text,
  action,
  buttonText,
  alternative,
  buttonTextAlternative,
  alternativeAction,
  save
}) => (
  <Modal animationType="fade" transparent onRequestClose={action} save={save}>
    <ModalView>
      <ModalContent accessibilityLabel={title}>
        <ModalTitle save={save}>{title}</ModalTitle>
        {!save && <ModalText>{text}</ModalText>}
        {alternative ? (
          <ModalContainer>
            <ModalButtonAlternative
              alternative={alternative}
              onPress={alternativeAction}
              accessibilityLabel={buttonTextAlternative.toUpperCase()}
            >
              <ModalButtonLabelAlternative alternative={alternative}>
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
        ) : (
          <ModalButton
            alternative={alternative}
            onPress={action}
            accessibilityLabel={buttonText.toUpperCase()}
          >
            <ModalButtonLabel>{buttonText.toUpperCase()}</ModalButtonLabel>
          </ModalButton>
        )}
      </ModalContent>
    </ModalView>
  </Modal>
);
NatModal.defaultProps = {
  alternative: false,
  alternativeAction: PropTypes.func,
  buttonTextAlternative: "Button text error",
  save: false,
  text: "Modal text error"
};
