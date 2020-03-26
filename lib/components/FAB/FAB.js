import React from 'react';
import PropTypes from 'prop-types';

import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';
import { FABWrapper, FABText } from './FAB.styles';
import { NatIcon } from '../NatIcon';

export const FAB = ({
  color, onPress, size, theme, type, value, icon,
}) => {
  const iconSizes = {
    default: 30,
    large: 50,
    medium: 40,
  };

  const renderText = () => {
    if (!!value) {
      return (
        <FABText color={color} type={type} size={size} theme={theme}>
          {value}
        </FABText>
      );
    }

    return null;
  };

  const renderIcon = () => {
    if (!!icon) {
      const iconSize = iconSizes[size];

      return (
        <NatIcon name={icon} size={iconSize || iconSizes.default} />
      );
    }

    return null;
  };

  return (
    <FABWrapper
      color={color}
      onPress={onPress}
      type={type}
      size={size}
      theme={theme}>
      { renderText() }
      { renderIcon() }
    </FABWrapper>
  );
};

FAB.defaultProps = {
  color: 'default',
  icon: '',
  size: 'small',
  theme: ThemeNaturaLight,
  type: 'extended',
  value: '',
};

FAB.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  size: PropTypes.string,
  theme: PropTypes.shape(),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};
