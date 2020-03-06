import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from './NatText.styles';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

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
  color: PropTypes.string,
  margin: PropTypes.number,
  type: PropTypes.string,
  value: PropTypes.string,
};

NatText.defaultProps = {
  color: ThemeNaturaLight.palette.text.primary,
  margin: ThemeNaturaLight.spacing.spacingStandard,
  type: 'body1',
  value: '',
};
