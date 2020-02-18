import React, { useState } from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  Text,
  SafeAreaView,
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
  secureTextEntry,
  assistiveText,
  icon,
  iconPress,
  onFocus,
  onBlur,
  size,
  margin,
  multiline,
  numberOfLines,
  accessibilityLabel,
  accessibilityHint,
  autoCapitalize,
  autoCorrect,
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
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  assistiveText: PropTypes.string,
  iconPress: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  size: PropTypes.string,
  margin: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  accessibilityHint: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  multiline: PropTypes.bool,
  numberOfLines: PropTypes.number,
  icon: PropTypes.shape({
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.number,
    }),
    content: PropTypes.any,
  }),
  theme: PropTypes.shape(),
};

NatSelectInput.defaultProps = {
  type: 'default',
  placeholder: 'Search',
  value: '',
  iconPress: null,
  icon: {
    svg: {
      name: 'outlined-navigation-arrowbottom',
      size: 24,
    },
  },
  multiline: false,
  numberOfLines: 1,
  theme: ThemeNaturaLight,
};
