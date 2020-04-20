import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from './NatText.styles';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const NatText = ({
  value,
  textAlign,
  type,
  color,
  margin,
}) => (
  <View margin={margin}>
    <Text type={type} color={color} textAlign={textAlign}>
      {value}
    </Text>
  </View>
);

NatText.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.number,
  textAlign: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

NatText.defaultProps = {
  color: ThemeNaturaLight.palette.text.primary,
  margin: ThemeNaturaLight.spacing.spacingStandard,
  textAlign: 'auto',
  type: 'body1',
  value: '',
};
