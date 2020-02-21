import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from './NatImage.styles';

export const NatImage = ({ source, onPress, type }) => (
  <View
    onPress={onPress}
    type={type}
  >
    <Image
      source={{ uri: source }}
      type={type}
    />
  </View>
);

NatImage.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.string.isRequired,
  type: PropTypes.string,
};

NatImage.defaultProps = {
  onPress: () => {},
  type: 'default',
};
