import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from './NatText.styles';
import { ThemeNaturaLight } from '../..';

export const NatText = ({
  value,
  type,
  color,
  margin,
}) => (
  <View margin={margin}>
    <Text type={type} color={color}>
      {value}
    </Text>
  </View>
);

NatText.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.number,
};

NatText.defaultProps = {
  value: '',
  type: 'h6',
  color: ThemeNaturaLight.palette.text.primary,
  margin: ThemeNaturaLight.spacing.spacingStandard,
};
