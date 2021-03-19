import React from 'react';
import PropTypes from 'prop-types';
import { View, MenuTitle } from './NatMenuItem.styles';
import { loadIcon } from '../../utils';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';
import { RedCircle } from '../RedCircle';

export const NatMenuItem = ({
  type,
  title,
  onPress,
  icon,
  iconLeft,
  showNotification,
}) => {
  const iconAttributes = {
    color: ThemeNaturaLight.palette.text.primary,
    size: 24,
  };

  return (
    <View onPress={onPress}>
      {loadIcon(icon, iconAttributes)}

      {showNotification ? (
        <View style={{ flex: 1, marginRight: 5 }} onPress={onPress}>
          <MenuTitle type={type}>{title}</MenuTitle>
          <RedCircle />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            marginRight: 5,
          }} onPress={onPress}>
          <MenuTitle type={type}>{title}</MenuTitle>
        </View>
      )}
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
  showNotification: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string,
};

NatMenuItem.defaultProps = {
  icon: {},
  iconLeft: {},
  onPress: null,
  showNotification: false,
  title: 'title',
  type: 'default',
};
