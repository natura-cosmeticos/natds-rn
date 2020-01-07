import React from 'react';
import PropTypes from 'prop-types';
import { View, MenuIcon, MenuTitle } from './NatMenuItem.styles';
import { Icon } from '../../assets/icons';

const renderIcon = (icon) => {
  if (icon) {
    if (icon.name) {
      return <MenuIcon source={Icon(icon.name)} />;
    }
    if (icon.uri) {
      return <MenuIcon source={{ uri: icon.uri }} />;
    }
  }
  return null;
};

export const NatMenuItem = ({
  type, title, onPress, icon,
}) => (
  <View
    onPress={onPress}
  >
    {renderIcon(icon)}
    <MenuTitle type={type}>{title}</MenuTitle>
  </View>
);


NatMenuItem.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  onPress: PropTypes.func,
  icon: PropTypes.shape({
    icon: PropTypes.string,
    text: PropTypes.string,
  }),
};

NatMenuItem.defaultProps = {
  type: 'default',
  title: 'title',
  onPress: null,
  icon: {},
};
