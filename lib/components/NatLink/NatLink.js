import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from './NatLink.styles';

export const NatLink = ({
  value, onPress, type, margin,
}) => {
  const defaultMargin = (propMargin) => {
    switch (propMargin) {
      case 'none': return '0px';
      case 'dense': return '8px';
      case 'normal': return '16px';
      default: return '0px';
    }
  };

  return (
    <TouchableOpacity onPress={onPress} defaultMargin={defaultMargin(margin)}>
      <Text type={type}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

NatLink.propTypes = {
  margin: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

NatLink.defaultProps = {
  type: 'body2',
};
