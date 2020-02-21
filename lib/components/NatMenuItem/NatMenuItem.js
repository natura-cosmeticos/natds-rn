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
  icon: PropTypes.shape({
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
  onPress: null,
  title: 'title',
  type: 'default',
};
