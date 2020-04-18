/* eslint-disable max-lines */
import React, { useState } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Wrapper,
} from './NatSelectInput.styles';
import { NatModalSelect } from '../NatModalSelect';
import { NatTextInput } from '../NatTextInput';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';


export const NatSelectInput = ({
  accessibilityHint,
  accessibilityLabel,
  assistiveText,
  icon,
  label,
  margin,
  multiSelect,
  onChange,
  options,
  placeholder,
  searchText,
  selectButtonText,
  size,
  theme,
  type,
  value,
}) => {
  const [valueLocal, setValueLocal] = useState(value);
  const [modalVisible, setModalVisible] = useState(false);

  const defaultMargin = (propMargin) => {
    switch (propMargin) {
      case 'none': return '0px';
      case 'dense': return '8px';
      case 'normal': return '16px';
      default: return '0px';
    }
  };

  const onChangeValues = (text) => {
    onChange(text);
  };

  const onPressInputField = () => {
    if (type !== 'disabled') setModalVisible(true);
  };

  const onPressSelectButton = (values) => {
    setModalVisible(false);
    setValueLocal(values);
    onChange(values);
  };

  const showSelectedOptions = () => options
    .filter(item => valueLocal.includes(item.id))
    .map(item => item.title)
    .join(',');

  return (
    <Wrapper
      defaultMargin={defaultMargin(margin)}
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      theme={theme}
    >
      <NatModalSelect
        visible={modalVisible}
        onClose={onPressSelectButton}
        buttonText={selectButtonText}
        value={valueLocal}
        placeholderText={searchText}
        options={options}
        multiSelect={multiSelect}
      />
      <TouchableOpacity onPress={onPressInputField}>
        <NatTextInput
          label={label}
          placeholder={placeholder}
          assistiveText={assistiveText}
          onChangeText={onChangeValues}
          onFocus={onPressInputField}
          value={showSelectedOptions()}
          size={size}
          type={type}
          icon={icon}
        />
      </TouchableOpacity>
    </Wrapper>
  );
};

NatSelectInput.propTypes = {
  accessibilityHint: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  assistiveText: PropTypes.string,
  icon: PropTypes.shape({
    content: PropTypes.any,
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.number,
    }),
  }),
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  multiSelect: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      title: PropTypes.string,
    },
  )),
  placeholder: PropTypes.string,
  searchText: PropTypes.string,
  selectButtonText: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.shape({}),
  type: PropTypes.string,
  value: PropTypes.array,
};

NatSelectInput.defaultProps = {
  icon: {
    svg: {
      name: 'outlined-navigation-arrowbottom',
      size: 24,
    },
  },
  iconPress: null,
  multiSelect: false,
  numberOfLines: 1,
  options: [],
  placeholder: '',
  searchText: 'Search',
  selectButtonText: 'Select',
  theme: ThemeNaturaLight,
  type: 'default',
  value: [],
};
