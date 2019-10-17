import React from 'react';
import PropTypes from 'prop-types';
import { View, MenuIcon, MenuTitle } from './NatMenuItem.styles';
import icoArrowLeft from '../../assets/icons/nat-ic-arrow-left.png';

export const NatMenuItem = ({type, title, onPress, icon}) => (
  <View
  onPress={onPress}
  >
    <MenuIcon
      source={icon}
    />
    <MenuTitle type={type}>{title}</MenuTitle>
  </View>
);


NatMenuItem.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
};

NatMenuItem.defaultProps = {
  type: 'default',
  title: 'title',
  onPress: null,
  icon: icoArrowLeft,
};
