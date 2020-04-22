import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from './NatLink.styles';
import {
  ThemeNaturaLight as Theme,
} from '../../themes/ThemeNaturaLight';
import { NatText } from '../NatText';

export const NatLink = ({
  value, onPress, type, margin, color, align,
}) => (
  <TouchableOpacity onPress={onPress} marginBottom={margin} alignDefault={align}>
    <NatText type={type} value={value} color={color} />
  </TouchableOpacity>
);

NatLink.propTypes = {
  align: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  onPress: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

NatLink.defaultProps = {
  align: 'flex-start',
  color: Theme.palette.complementary.link,
  margin: 'none',
  type: 'body2',
};
