import React from 'react';
import PropTypes from 'prop-types';

import { View } from './Divider.styles';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const Divider = ({
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
  theme,
}) => (
  <View {...{
    backgroundColor,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme,
  }}
  >
    { children }
  </View>
);

Divider.propTypes = {
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
  theme: PropTypes.shape(),
};

Divider.defaultProps = {
  backgroundColor: `${ThemeNaturaLight.palette.grayscale.colorBrdBlack}1F`,
  marginBottom: '0',
  marginLeft: '0',
  marginRight: '0',
  marginTop: '0',
  paddingBottom: '0',
  paddingLeft: '0',
  paddingRight: '0',
  paddingTop: '1',
  theme: ThemeNaturaLight,
};
