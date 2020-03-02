import React, { useState } from 'react';
import {
  Modal,
  SafeAreaView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import {
  ModalContent,
} from './NatModalSelect.styles';

import {
  NatAppBarSearch,
  Button,
  NatList,
} from '../..';

export const NatModalSelect = ({
  action,
  buttonText,
  multiSelect,
  onClose,
  options,
  placeholderText,
  save,
  title,
  value,
  visible,
}) => {
  const [inputSelected, setInputSelected] = useState(value);
  const [inputFilter, setInputFilter] = useState([]);

  const selectButton = () => {
    onClose(inputSelected);
  };

  const optionsList = () => options
    .filter((item) => {
      if (inputFilter === '') return true;

      return item.title.includes(inputFilter);
    })
    .map(item => ({
      dividerBottom: true,
      hideIconLeft: true,
      id: item.id,
      title: item.title,
    }));

  return (
    <Modal
      animationType="fade"
      onRequestClose={action}
      save={save}
      visible={visible}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ModalContent accessibilityLabel={title}>
          <View style={{ height: 59 }}>
            <NatAppBarSearch
              title={placeholderText}
              value={inputFilter}
              onSubmit={text => setInputFilter(text)}
              showIconLeft={true}
              onPressLeft={() => onClose(inputSelected)}
              iconLeft={{ svg: { name: 'outlined-naviagtion-directionright' } }}
              submitOnChange
            />
          </View>
          <View style={{ flex: 1 }}>
            <NatList
              items={optionsList()}
              selected={inputSelected}
              onChange={setInputSelected}
              multiSelect={multiSelect}
            />
          </View>
          <View style={{ height: 48 }}>
            <Button
              type="primary"
              fixedBottom
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
  multiSelect: PropTypes.bool,
  onClose: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      title: PropTypes.string,
    },
  )),
  placeholderText: PropTypes.string,
  save: PropTypes.bool,
  title: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  visible: PropTypes.bool,
};

NatModalSelect.defaultProps = {
  buttonText: 'Select',
  multiSelect: false,
  onClose: () => {},
  options: [],
  placeholderText: 'Search',
  save: false,
  value: [],
  visible: false,
};
