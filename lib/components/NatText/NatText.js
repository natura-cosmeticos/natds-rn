import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from './NatText.styles';

export const NatText = ({ value, type, margin }) => {
  const defaultMargin = (propMargin) => {
    switch (propMargin) {
      case 'none': return '0px';
      case 'dense': return '8px';
      case 'normal': return '16px';
      default: return '0px';
    }
  };

  return (
    <View defaultMargin={defaultMargin(margin)}>
      <Text type={type}>
        {value}
      </Text>
    </View>
  );
};

NatText.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  margin: PropTypes.string,
};

NatText.defaultProps = {
  type: 'h6',
};
