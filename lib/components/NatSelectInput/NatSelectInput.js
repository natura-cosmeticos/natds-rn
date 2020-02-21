import React, { useState } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {
  Wrapper,
} from './NatSelectInput.styles';
import {
  ThemeNaturaLight,
  NatTextInput,
  NatModalSelect,
} from '../..';


export const NatSelectInput = ({
  onChange,
  value,
  type,
  label,
  placeholder,
  assistiveText,
  icon,
  size,
  margin,
  accessibilityLabel,
  accessibilityHint,
  theme,
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
    setModalVisible(true);
  };

  const onPressSelectButton = (values) => {
    setModalVisible(false);
    setValueLocal(values);
  };

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
        buttonText="Select"
        value={valueLocal}
        placeholderText={placeholder}
      />
      <TouchableOpacity onPress={onPressInputField}>
        <NatTextInput
          label={label}
          placeholder={placeholder}
          assistiveText={assistiveText}
          onChangeText={onChangeValues}
          onFocus={onPressInputField}
          value={value}
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
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.shape(),
  type: PropTypes.string,
  value: PropTypes.string,
};

NatSelectInput.defaultProps = {
  icon: {
    svg: {
      name: 'outlined-navigation-arrowbottom',
      size: 24,
    },
  },
  iconPress: null,
  numberOfLines: 1,
  placeholder: 'Search',
  theme: ThemeNaturaLight,
  type: 'default',
  value: '',
};
