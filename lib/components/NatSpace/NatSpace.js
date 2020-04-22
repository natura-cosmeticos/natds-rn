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
    backgroundColor,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
  }}
  >
    { children }
  </NatView>
);

NatSpace.propTypes = {
  backgroundColor: PropTypes.string,
  children: PropTypes.node,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
};

NatSpace.defaultProps = {
  backgroundColor: 'transparent',
  marginBottom: 'small',
  marginLeft: 'none',
  marginRight: 'none',
  marginTop: 'none',
  paddingBottom: 'none',
  paddingLeft: 'none',
  paddingRight: 'none',
  paddingTop: 'none',
};
