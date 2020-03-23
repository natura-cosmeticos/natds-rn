import React from 'react';
import PropTypes from 'prop-types';

import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';
import { FABWrapper, FABText } from './FAB.styles';

export const FAB = ({
  color, onPress, size, theme, type, value,
}) => (
  <FABWrapper
    color={color}
    onPress={onPress}
    type={type}
    size={size}
    theme={theme}>
    <FABText color={color} type={type} size={size} theme={theme}>
      {value}
    </FABText>
  </FABWrapper>
);

FAB.defaultProps = {
  color: 'default',
  size: 'small',
  theme: ThemeNaturaLight,
  type: 'extended',
};

FAB.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.string,
  theme: PropTypes.shape(),
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
