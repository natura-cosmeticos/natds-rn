import React from 'react';
import PropTypes from 'prop-types';
import { View, MenuIcon, MenuTitle } from './NatMenuItem.styles';
import { Icon } from '../../assets/icons';
import { load as loadSvg } from '../../assets/icons/svg';

const renderIcon = (icon) => {
  if (icon) {
    if (icon.svg && icon.svg.name) {
      const IconComponent = loadSvg(icon.svg.name);
      const iconSize = (icon.svg.size) ? icon.svg.size : 24;
      return <IconComponent width={iconSize} height={iconSize} />;
    }
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
    svg: PropTypes.shape({
      name: PropTypes.string,
      size: PropTypes.string,
    }),
  }),
};

NatMenuItem.defaultProps = {
  type: 'default',
  title: 'title',
  onPress: null,
  icon: {},
};
