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
  source: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
};

NatImage.defaultProps = {
  type: 'default',
};
