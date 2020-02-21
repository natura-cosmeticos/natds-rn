import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  ModalContent,
} from './NatModalSelect.styles';

import {
  NatAppBar,
  NatTextInput,
  NatButton,
} from '../..';

export const NatModalSelect = ({
  title,
  action,
  buttonText,
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
  action: PropTypes.func.isRequired,
  buttonText: PropTypes.string,
  onClose: PropTypes.func,
  placeholderText: PropTypes.string,
  save: PropTypes.bool,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool,
};

NatModalSelect.defaultProps = {
  buttonText: 'Select',
  onClose: () => {},
  placeholderText: 'Search',
  save: false,
  visible: false,
};
