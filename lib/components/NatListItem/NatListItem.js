import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { loadIcon } from '../../utils';
import {
  ThemeNaturaLight,
} from '../..';


import {
  HeaderWrapper,
  HeaderTitle,
  IconPress,
  TouchableOpacity,
  HeaderTitleView,
} from './NatListItem.styles';

export const NatListItem = ({
  title,
  node,
  iconLeft,
  iconRight,
  hideIconLeft,
  hideIconRight,
  onPressRight,
  onPressLeft,
  onPress,
  dividerTop,
  dividerBottom,
  active,
}) => {
  if (!title) {
    throw new Error('Title should not empty string');
  }

  const renderIcon = (iconData, iconPress, position) => {
    const iconAttributes = {
      color: ThemeNaturaLight.palette.text.primary,
      size: 24,
    };

    let styleCustom = {};

    if (position === 'right') {
      styleCustom = { position: 'absolute', right: 0 };
    } else {
      styleCustom = { left: 0, position: 'absolute' };
    }

    return (
      <View style={styleCustom}>
        <IconPress onPress={iconPress} position={position}>
          { loadIcon(iconData, iconAttributes) }
        </IconPress>
      </View>
    );
  };

  const localPress = () => {
    if (onPress) {
      onPress();
    }
  };

  const renderTitle = localTitle => (
    <TouchableOpacity
      onPress={localPress}
    >
      <HeaderTitle
        accessibilityLabel={`${localTitle}`}
      >
        {localTitle}
      </HeaderTitle>
    </TouchableOpacity>
  );

  return (
    <HeaderWrapper
      accessible
      accessibilityRole="header"
      dividerBottom={dividerBottom}
      dividerTop={dividerTop}
      active={active}
    >
      { !hideIconLeft && renderIcon(iconLeft, onPressLeft, 'left') }
      <HeaderTitleView
        hideIconLeft={hideIconLeft}
        hideIconRight={hideIconRight}
      >
        { node && node}
        { !node && renderTitle(title)}
      </HeaderTitleView>
      { !hideIconRight && renderIcon(iconRight, onPressRight, 'right') }
    </HeaderWrapper>
  );
};

NatListItem.propTypes = {
  active: PropTypes.bool,
  dividerBottom: PropTypes.bool,
  dividerTop: PropTypes.bool,
  hideIconLeft: PropTypes.bool,
  hideIconRight: PropTypes.bool,
  iconLeft: PropTypes.shape(),
  iconRight: PropTypes.shape(),
  node: PropTypes.node,
  onPress: PropTypes.func,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  title: PropTypes.string,
};

NatListItem.defaultProps = {
  active: false,
  dividerBottom: false,
  dividerTop: false,
  hideIconLeft: false,
  hideIconRight: false,
  iconLeft: null,
  iconRight: null,
  node: null,
  onPress: null,
  onPressLeft: () => {},
  onPressRight: () => {},
  title: null,
};
