import React from 'react';
import PropTypes from 'prop-types';
import { View, MenuTitle } from './NatMenuItem.styles';
import { loadIcon } from '../../utils';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

export const NatMenuItem = ({
  type, title, onPress, icon, iconLeft,
}) => {
  const iconAttributes = {
    color: ThemeNaturaLight.palette.text.primary,
    size: 24,
  };

  return (
    <View onPress={onPress}>
      {loadIcon(icon, iconAttributes)}
      <MenuTitle type={type}>{title}</MenuTitle>
      {loadIcon(iconLeft, iconAttributes)}
    </View>
  );
};

NatMenuItem.propTypes = {
  icon: PropTypes.shape({
    icon: PropTypes.string,
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.string,
    }),
    text: PropTypes.string,
  }),
  iconLeft: PropTypes.shape({
    icon: PropTypes.string,
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.string,
    }),
    text: PropTypes.string,
  }),
  onPress: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.string,
};

NatMenuItem.defaultProps = {
  icon: {},
  iconLeft: {},
  onPress: null,
  title: 'title',
  type: 'default',
};
