/* eslint-disable max-lines */
import React, { useState } from 'react';
import { Modal, SafeAreaView, View } from 'react-native';
import { ModalContent } from './NatModalSelect.styles';
import { NatList } from '../NatList';
import { NatAppBarSearch } from '../NatAppBarSearch';
import { Button } from '../Button';

type NatModalSelectProps = {
  action?: (...args: any[]) => any,
  buttonText?: string,
  multiSelect?: boolean,
  onClose: (...args: any[]) => any,
  options: {
    id: string,
    title: string
  }[],
  placeholderText?: string,
  title?: string,
  value?: string[],
  visible?: boolean
};
export const NatModalSelect: React.SFC<NatModalSelectProps> = ({
  action,
  buttonText,
  multiSelect,
  onClose,
  options,
  placeholderText,
  title,
  value,
  visible,
}) => {
  const [inputSelected, setInputSelected] = useState(value);
  const [inputFilter, setInputFilter] = useState('');
  const selectButton = () => {
    onClose(inputSelected);
  };
  const closeOnChange = (values) => {
    if (!multiSelect) {
      onClose(values);
    }
    setInputSelected(values);
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
      visible={visible}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ModalContent accessibilityLabel={title || ''}>
          <View style={{ height: 59 }}>
            <NatAppBarSearch
              title={placeholderText}
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
              onChange={closeOnChange}
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
NatModalSelect.defaultProps = {
  buttonText: 'Select',
  multiSelect: false,
  onClose: () => {},
  options: [],
  placeholderText: 'Search',
  value: [],
  visible: false,
};
