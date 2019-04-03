import React from 'react';
import PropTypes from 'prop-types';

import { NatView } from './NatContainer.styles';

export const NatContainer = ({ children, ...props }) => (
  <NatView {...props}>
    { children }
  </NatView>
);

NatContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
