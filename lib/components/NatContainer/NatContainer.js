import React from 'react';
import PropTypes from 'prop-types';

import { View } from './NatContainer.styles';

export const NatContainer = ({ children, ...props }) => (
  <View {...props}>
    { children }
  </View>
);

NatContainer.propTypes = {
  children: PropTypes.node.isRequired,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
};

NatContainer.defaultProps = {
  marginBottom: 'none',
  marginLeft: 'none',
  marginRight: 'none',
  marginTop: 'none',
  paddingBottom: 'small',
  paddingLeft: 'small',
  paddingRight: 'small',
  paddingTop: 'small',
};
