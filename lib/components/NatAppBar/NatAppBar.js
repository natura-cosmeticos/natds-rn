/* eslint-disable complexity, max-lines */
import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { loadIcon } from '../../utils';
import { ThemeNaturaLight } from '../../themes/ThemeNaturaLight';

import { RedCircle } from '../RedCircle';

import {
  HeaderContent,
  HeaderTitle,
  HeaderWrapper,
  IconPress,
} from './NatAppBar.styles';

export const NatAppBar = ({
  alignTitle,
  title,
  node,
  iconLeft,
  iconRight,
  onPressRight,
  onPressLeft,
  showIconLeft,
  showIconRight,
  showNotificationRight,
  showNotificationLeft,
}) => {
  const renderIcon = (iconData, iconPress, position, showNotification) => {
    const iconAttributes = {
      color: ThemeNaturaLight.palette.text.primary,
      size: 24,
    };

    let styleCustom = {};

    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    }

    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} position={position}>
          {showNotification &&
            !iconData.svg.name.includes(
              'outlined-navigation-directionright',
            ) && <RedCircle whereToRender="AppBar" position={position} />}

          {loadIcon(iconData, iconAttributes)}
        </IconPress>
      </View>
    );
  };

  const renderNode = () => (
    <View
      style={{
        bottom: 0,
        justifyContent: alignTitle,
        left: 0,
        paddingLeft: 16,
        paddingRight: 16,
        position: 'absolute',
        right: 0,
        top: 0,
      }}>
      {node}
    </View>
  );

  return (
    <HeaderWrapper>
      <HeaderContent accessible accessibilityRole="header">
        {showIconLeft &&
          renderIcon(iconLeft, onPressLeft, 'left', showNotificationLeft)}
        <View
          style={{
            alignItems: alignTitle,
            bottom: 0,
            justifyContent: alignTitle,
            left: showIconLeft ? 40 : 0,
            position: 'absolute',
            right: showIconRight ? 40 : 0,
            top: 0,
          }}>
          {node && renderNode()}
          {!node && (
            <HeaderTitle
              accessibilityLabel={`${title}`}
              alignTitle={alignTitle}>
              {title}
            </HeaderTitle>
          )}
        </View>
        {showIconRight &&
          renderIcon(iconRight, onPressRight, 'right', showNotificationRight)}
      </HeaderContent>
    </HeaderWrapper>
  );
};

NatAppBar.propTypes = {
  alignTitle: PropTypes.string,
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  node: PropTypes.node,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  showIconLeft: PropTypes.bool,
  showIconRight: PropTypes.bool,
  showNotificationRight: PropTypes.bool,
  showNotificationLeft: PropTypes.bool,
  title: PropTypes.string,
};

NatAppBar.defaultProps = {
  alignTitle: 'flex-start',
  iconLeft: null,
  iconRight: null,
  node: null,
  onPressLeft: () => {},
  onPressRight: () => {},
  showIconLeft: true,
  showIconRight: true,
  showNotificationRight: false,
  showNotificationLeft: false,
  title: '',
};
