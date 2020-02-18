import React from 'react';
import PropTypes from 'prop-types';

import { NatView } from './NatSpace.styles';

export const NatSpace = ({
  children,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  backgroundColor,
}) => (
  <NatView {...{
    marginTop,
    marginBottom,
    marginRight,
    marginLeft,
    paddingTop,
    paddingBottom,
    paddingRight,
    paddingLeft,
    backgroundColor,
  }}
  >
    { children }
  </NatView>
);

NatSpace.propTypes = {
  children: PropTypes.node.isRequired,
  marginTop: PropTypes.string,
  marginBottom: PropTypes.string,
  marginRight: PropTypes.string,
  marginLeft: PropTypes.string,
  paddingTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingLeft: PropTypes.string,
  backgroundColor: PropTypes.string,
};

NatSpace.defaultProps = {
  marginTop: 'none',
  marginBottom: 'small',
  marginRight: 'none',
  marginLeft: 'none',
  paddingTop: 'none',
  paddingBottom: 'none',
  paddingRight: 'none',
  paddingLeft: 'none',
  backgroundColor: 'transparent',
};
