import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
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
} from './NatModalSelect.styles';

import {
  NatAppBar,
  NatTextInput,
  NatButton,
} from '../..';

export const NatModalSelect = ({
  title,
  text,
  action,
  buttonText,
  alternative,
  buttonTextAlternative,
  alternativeAction,
  save,
  visible,
  onClose,
  placeholderText,
}) => {
  const [inputSearch, setInputSearch] = useState('');
  const getInput = () => (
    <NatTextInput
      label=""
      placeholder={placeholderText}
      onChangeText={setInputSearch}
      value={inputSearch}
      size="normal"
      type="none"
    />
  );

  const selectButton = () => {
    setInputSearch('');
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      onRequestClose={action}
      save={save}
      visible={visible}
      style={{ backgroundColor: 'blue' }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ModalContent accessibilityLabel={title}>
          <View style={{ height: 56 }}>
            <NatAppBar
              title="Modal Search"
              node={getInput()}
              showIconLeft={false}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Text>teste</Text>
          </View>
          <View style={{ height: 48 }}>
            <NatButton
              type="newDefault"
              label={buttonText}
              onPress={selectButton}
            />
          </View>
        </ModalContent>
      </SafeAreaView>
    </Modal>
  );
};

NatModalSelect.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  action: PropTypes.func.isRequired,
  alternative: PropTypes.bool,
  save: PropTypes.bool,
  buttonTextAlternative: PropTypes.string,
  alternativeAction: PropTypes.func,
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  buttonText: PropTypes.string,
  placeholderText: PropTypes.string,
};

NatModalSelect.defaultProps = {
  alternative: false,
  save: false,
  text: 'Modal text error',
  alternativeAction: PropTypes.func,
  buttonTextAlternative: 'Button text error',
  visible: false,
  onClose: () => {},
  buttonText: 'Select',
  placeholderText: 'Search',
};
